import HTTPClient from "../HTTPClient.js";
import HttpNotFoundException from "../exception/HttpNotFoundException.js";
import WarInfo from "../model/WarInfo.js";
import WarInfoDenormaliser from "../denormaliser/WarInfoDenormaliser.js";
import HttpErrorException from "../exception/HttpErrorException.js";

export default class WarInfoRepository {
    /**
     * @param warSeasonId
     * @returns {Promise<WarInfo>}
     */
    static async getById(warSeasonId) {
        try {
            const response = await HTTPClient.getInstance().get('/api/WarSeason/' + warSeasonId + '/WarInfo');

            return WarInfoDenormaliser.denormaliseWarInfo(response.data)
        } catch (error) {
            if (error.response.status === 400) {
                throw new HttpNotFoundException(`WarSeason with ID ${warSeasonId} not found.`);
            } else {
                throw new HttpErrorException('An error occurred.', error.response.status, error.response);
            }
        }
    }
}
