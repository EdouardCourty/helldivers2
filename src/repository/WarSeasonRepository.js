import HTTPClient from "../HTTPClient.js";
import WarSeason from "../model/WarSeason.js";
import HttpNotFoundException from "../exception/HttpNotFoundException.js";
import WarSeasonDenormaliser from "../denormaliser/WarSeasonDenormaliser.js";
import HttpErrorException from "../exception/HttpErrorException.js";

export default class WarSeasonRepository {
    /**
     * @param {number} warId
     * @returns {Promise<WarSeason>}
     */
    static async getById(warId) {
        try {
            const response = await HTTPClient.getInstance().get('/api/WarSeason/' + warId + '/Status');

            return WarSeasonDenormaliser.denormaliseWarSeason(response.data)
        } catch (error) {
            if (error.response.status === 400 || error.response.status === 404) {
                throw new HttpNotFoundException(`War with ID ${warId} not found.`);
            } else {
                throw new HttpErrorException('An error occurred.', error.response.status, error.response);
            }
        }
    }
}
