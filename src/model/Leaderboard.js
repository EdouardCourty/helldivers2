import LeaderboardEntry from "./Leaderboard/LeaderboardEntry.js";

export default class Leaderboard {
    /** @type number */
    page;
    /** @type number */
    limit;
    /** @type number */
    totalResults;
    /** @type number */
    maxPage;
    /** @type LeaderboardEntry[] */
    entries;
}
