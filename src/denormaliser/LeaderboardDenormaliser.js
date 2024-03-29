import Leaderboard from "../model/Leaderboard.js";
import LeaderboardEntry from "../model/Leaderboard/LeaderboardEntry.js";

export default class LeaderboardDenormaliser {
    /**
     * @param {object} body
     * @returns Leaderboard
     */
    static denormaliseLeaderboard(body) {
        const leaderboard = new Leaderboard();
        leaderboard.page = body['pageNumber'];
        leaderboard.limit = body['pageSize'];
        leaderboard.totalResults = body['totalRecords'];
        leaderboard.entries = body['entries'].map((data) => this.denormaliseLeaderboardEntry(data));
        leaderboard.maxPage = Math.ceil(body['totalRecords'] / body['pageSize']);

        return leaderboard;
    }

    /**
     * @param {object} data
     * @returns LeaderboardEntry
     */
    static denormaliseLeaderboardEntry(data) {
        const leaderboardEntry = new LeaderboardEntry();
        leaderboardEntry.xp = data['experience'];
        leaderboardEntry.playerName = data['name'];
        leaderboardEntry.banner = data['banner'];
        leaderboardEntry.score = data['score'];
        leaderboardEntry.rank = data['rank'];

        return leaderboardEntry;
    }
}
