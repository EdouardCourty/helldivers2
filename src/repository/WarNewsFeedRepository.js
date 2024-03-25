import HTTPClient from "../HTTPClient.js";
import HttpNotFoundException from "../exception/HttpNotFoundException.js";
import HttpErrorException from "../exception/HttpErrorException.js";
import NewsFeedMessage from "../model/NewsFeedMessage.js";
import NewsFeedDenormaliser from "../denormaliser/NewsFeedDenormaliser.js";

export default class WarNewsFeedRepository {
    /**
     * @param {number} warId
     * @param {number|null} fromTimestamp
     * @returns {Promise<NewsFeedMessage[]>}
     */
    static async getByWarId(warId, fromTimestamp = null) {
        try {
            const params = fromTimestamp ? { fromTimestamp: fromTimestamp } : {};
            const response = await HTTPClient.getInstance().get('/api/NewsFeed/' + warId, {
                params: params
            });

            return NewsFeedDenormaliser.denormaliseNewsFeed(response.data)
        } catch (error) {
            if (error.response.status === 400 || error.response.status === 404) {
                throw new HttpNotFoundException(`War with ID ${warId} not found.`);
            } else {
                throw new HttpErrorException('An error occurred.', error.response.status, error.response);
            }
        }
    }
}
