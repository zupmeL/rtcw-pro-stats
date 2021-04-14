import { FC, useMemo } from "react";
import useFetch from "use-http";
import { PlayerStats, StatsResponse } from "../../types";
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

    const { axisPlayers, alliesPlayers }  = splitPlayersIntoTeams( data.statsall );

    const byEffiency = (a: PlayerStats, b: PlayerStats) => {
      return b.categories.efficiency - a.categories.efficiency;
    };

    return [
      axisPlayers.sort(byEffiency),
      alliesPlayers.sort(byEffiency),
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

const splitPlayersIntoTeams = ( players: any[] ) => {
  let axisPlayers: PlayerStats[] = [], alliesPlayers: PlayerStats[] = [];

  players.forEach( player => {
    Object.keys( player ).forEach( player_id => {
      player = player[player_id]
    } );
    if ( player.team.toUpperCase() === "AXIS" ) {
      axisPlayers.push( player );
    } else {
      alliesPlayers.push( player );
    }
  } );

  return { alliesPlayers, axisPlayers };
}