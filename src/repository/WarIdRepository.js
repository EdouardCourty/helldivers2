import HTTPClient from "../HTTPClient.js";
import HttpErrorException from "../exception/HttpErrorException.js";

export default class WarIdRepository {
    /**
     * @returns {Promise<number>}
     */
    static async getCurrentWarId() {
        try {
            const response = await HTTPClient.getInstance().get('/api/WarSeason/current/WarId');

            return response['data']['id'];
        } catch (error) {
            throw new HttpErrorException('An error occurred.', error.response.status, error.response);
        }
    }
}
