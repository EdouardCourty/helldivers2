import HTTPClient from "../HTTPClient.js";
import HttpNotFoundException from "../exception/HttpNotFoundException.js";
import HttpErrorException from "../exception/HttpErrorException.js";
import Assignment from "../model/Assignment.js";
import WarAssignmentDenormaliser from "../denormaliser/WarAssignmentDenormaliser.js";

export default class WarAssignmentRepository {
    /**
     * @param {number} warId
     * @returns {Promise<Assignment[]>}
     */
    static async getWarAssignment(warId) {
        try {
            const response = await HTTPClient.getInstance().get('/api/v2/Assignment/War/' + warId);

            return WarAssignmentDenormaliser.denormaliseWarAssignment(response.data)
        } catch (error) {
            if (error.response.status === 400 || error.response.status === 404) {
                throw new HttpNotFoundException(`War with ID ${warId} not found.`);
            } else {
                throw new HttpErrorException('An error occurred.', error.response.status, error.response);
            }
        }
    }
}
