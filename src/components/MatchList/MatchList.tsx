import { FC } from "react";
import { Link } from "react-router-dom";
import { Match } from "../../types";
import styles from "./MatchList.module.css";

export type MatchListProps = {
  loading: boolean;
  matches: Match[];
};

export const MatchList: FC<MatchListProps> = ({ loading, matches }) => {
  if (loading) {
    return <div>Loading matches</div>;
  }

  return (
    <div className={styles.body}>
      {matches.map((match) => (
        <Link
          to={`/matches/${match.match_id}`}
          key={match.match_round_id}
          className={styles.row}
        >
          <div className={styles.matchId}>{match.match_id}</div>
          <div className={styles.map}>{match.map}</div>
          <div className={styles.region}>{_getRegion(match.type)}</div>
        </Link>
      ))}
    </div>
  );
};

const _getRegion = (matchType: string) => {
  const [region] = matchType.split("#");
  switch (region.toLowerCase()) {
    case "na":
      return "NA";
    case "eu":
      return "EU";
    default:
      return "?";
  }
};
