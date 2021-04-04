import useFetch from "use-http";
import { Match } from "../../types";
import styles from "./HomePage.module.css";
import { MatchList } from "../../components/MatchList/MatchList";

export const HomePage: React.FC = () => {
  const { data: matches = [], loading } = useFetch<Match[]>(
    "/matches/recent/92",
    {},
    []
  );

  if (loading) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Recent matches</h3>
      <MatchList matches={matches} loading={loading} />
    </div>
  );
};
