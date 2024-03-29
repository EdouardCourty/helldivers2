import LeaderboardDenormaliser from "../denormaliser/LeaderboardDenormaliser.js";
import Leaderboard from "../model/Leaderboard.js";
import HTTPClient from "../HTTPClient.js";
import HttpNotFoundException from "../exception/HttpNotFoundException.js";
import HttpErrorException from "../exception/HttpErrorException.js";

export default class LeaderboardRepository {
    /**
     * @param {number} warId
     * @param {number} page
     * @param {number} limit
     * @returns Promise<Leaderboard>
     */
    static async getWarLeaderboard(warId, page = 1, limit = 10) {
        try {
            const response = await HTTPClient.getInstance().get('api/LeaderBoard/HotF/v2/Player/' + warId, {
                params: {
                    'PageSize': limit,
                    'PageNumber': page - 1
                }
            });

            return LeaderboardDenormaliser.denormaliseLeaderboard(response.data)
        } catch (error) {
            if (error.response.status === 400 || error.response.status === 404) {
                throw new HttpNotFoundException(`Leaderboard for war ${warId} not found.`);
            } else {
                throw new HttpErrorException('An error occurred.', error.response.status, error.response);
            }
        }
    }
}
