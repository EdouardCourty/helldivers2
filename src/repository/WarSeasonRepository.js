import HTTPClient from "../HTTPClient.js";
import WarSeason from "../model/WarSeason.js";
import HttpNotFoundException from "../exception/HttpNotFoundException.js";
import WarSeasonDenormaliser from "../denormaliser/WarSeasonDenormaliser.js";

export default class {
    /**
     * @param {number} warSeasonId
     * @returns {Promise<WarSeason>}
     */
    static async getById(warSeasonId) {
        try {
            const response = await HTTPClient.getInstance().get('/api/WarSeason/' + warSeasonId + '/Status');

            return WarSeasonDenormaliser.denormaliseWarSeason(response.data)
        } catch (error) {
            if (error.response.status === 404) {
                throw new HttpNotFoundException(`WarSeason with ID ${warSeasonId} not found.`);
            }
        }
    }
}
