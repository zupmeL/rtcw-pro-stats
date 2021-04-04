import { FC } from "react";
import { useParams } from "react-router";
import styles from "./MatchDetailsPage.module.css";
import { MatchDetails } from "../../components/MatchDetails/MatchDetails";

export const MatchDetailsPage: FC = () => {
  const { matchId } = useParams<{ matchId: string }>();

  return (
    <div className={styles.wrapper}>
      <MatchDetails matchId={matchId} />
    </div>
  );
};
