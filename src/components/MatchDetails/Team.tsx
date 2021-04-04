import { FC } from "react";
import { PlayerStats } from "../../types";
import styles from "./Team.module.css";

export type TeamProps = {
  team: "axis" | "allies";
  players: PlayerStats[];
};

export const Team: FC<TeamProps> = ({ team, players }) => {
  return (
    <div className={styles.container}>
      <header className={styles.rowHeader}>
        <div className={styles.teamName}>{team}</div>
        <div>EFF</div>
        <div>KD</div>
        <div>ACC</div>
      </header>
      {players.map((player) => (
        <div key={player.alias} className={styles.row}>
          <div className={styles.alias}>{player.alias}</div>
          <div>{player.categories.efficiency}</div>
          <div>
            {player.categories.kills}-{player.categories.deaths}
          </div>
          <div>{player.categories.accuracy.toFixed(1)}%</div>
        </div>
      ))}
    </div>
  );
};
