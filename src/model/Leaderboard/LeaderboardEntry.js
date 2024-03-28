// The isSelf key exists in the API but since this library does not support authentication yet, I chose not to implement it
export default class LeaderboardEntry {
    /** @type number */
    xp;
    /* @type string */
    playerName;
    /** @type number */
    score;
    /** @type number */
    rank;
    /** @type number */
    banner;
}
