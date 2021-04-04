export type Match = {
  match_id: string;
  round: string;
  round_start: string;
  round_end: string;
  map: string;
  time_limit: string;
  allies_cycle: string;
  axis_cycle: string;
  winner: string;
  jsonGameStatVersion: string;
  type: string;
  match_round_id: string;
};

export type StatsResponse = {
  statsall: PlayerStatsDictionary[];
  match_id: string;
  type: string;
};

interface PlayerStatsDictionary {
  [playerId: string]: PlayerStats;
}

export interface PlayerStats {
  alias: string;
  team: string;
  start_time: number;
  num_rounds: number;
  categories: Categories;
  jsonGameStatVersion: string;
}

interface Categories {
  kills: number;
  deaths: number;
  gibs: number;
  suicides: number;
  teamkills: number;
  headshots: number;
  damagegiven: number;
  damagereceived: number;
  damageteam: number;
  hits: number;
  shots: number;
  accuracy: number;
  revives: number;
  ammogiven: number;
  healthgiven: number;
  poisoned: number;
  knifekills: number;
  killpeak: number;
  efficiency: number;
  score: number;
  dyn_planted: number;
  dyn_defused: number;
  obj_captured: number;
  obj_destroyed: number;
  obj_returned: number;
  obj_taken: number;
}
