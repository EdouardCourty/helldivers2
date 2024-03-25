import HTTPClient from "../HTTPClient.js";
import HttpErrorException from "../exception/HttpErrorException.js";
import HttpNotFoundException from "../exception/HttpNotFoundException.js";

export default class WarTimeRepository {
    /**
     * @param {number} warId
     * @returns {Promise<number>}
     */
    static async getWarTime(warId) {
        try {
            const response = await HTTPClient.getInstance().get('/api/WarSeason/' + warId + '/WarTime');

            return response['data']['time'];
        } catch (error) {
            if (error.response.status === 400 || error.response.status === 404) {
                throw new HttpNotFoundException(`WarSeason with ID ${warId} not found.`);
            } else {
                throw new HttpErrorException('An error occurred.', error.response.status, error.response);
            }
        }
    }
}
