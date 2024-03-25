import HTTPClient from "../HTTPClient.js";
import HttpNotFoundException from "../exception/HttpNotFoundException.js";
import HttpErrorException from "../exception/HttpErrorException.js";
import WarSummaryDenormaliser from "../denormaliser/WarSummaryDenormaliser.js";
import WarSummary from "../model/WarSummary.js";

export default class StatisticsRepository {
    /**
     * @param {number} warId
     * @returns {Promise<WarSummary>}
     */
    static async getWarSummary(warId) {
        try {
            const response = await HTTPClient.getInstance().get('/api/Stats/war/' + warId + '/summary');

            return WarSummaryDenormaliser.denormaliseWarSummary(response.data)
        } catch (error) {
            if (error.response.status === 400 || error.response.status === 404) {
                throw new HttpNotFoundException(`War with ID ${warId} not found.`);
            } else {
                throw new HttpErrorException('An error occurred.', error.response.status, error.response);
            }
        }
    }
}
