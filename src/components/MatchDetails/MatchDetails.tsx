import { FC, useMemo } from "react";
import useFetch from "use-http";
import { PlayerStats, StatsResponse } from "../../types";
import { toList } from "../../util/toList";
import styles from "./MatchDetails.module.css";
import { Team } from "./Team";

export type MatchDetailsProps = {
  matchId: string;
};

export const MatchDetails: FC<MatchDetailsProps> = ({ matchId }) => {
  const { data, loading } = useFetch<StatsResponse>(
    `/stats/${matchId}`,
    {},
    []
  );

  const [axis, allies] = useMemo(() => {
    if (!data) {
      return [[], []];
    }

    const [axisPlayers, alliesPlayers] = data.statsall;

    const byEffiency = (a: PlayerStats, b: PlayerStats) => {
      return b.categories.efficiency - a.categories.efficiency;
    };

    return [
      toList(axisPlayers).sort(byEffiency),
      toList(alliesPlayers).sort(byEffiency),
    ];
  }, [data]);

  if (loading) {
    return null;
  }

  if (!data) {
    return <div>Error while fetching match</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Match {matchId}</div>
      <div className={styles.body}>
        <Team team="axis" players={axis} />
        <Team team="allies" players={allies} />
      </div>
    </div>
  );
};
