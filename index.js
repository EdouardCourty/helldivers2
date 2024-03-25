import WarSeasonRepository from "./src/repository/WarSeasonRepository.js";
import WarInfoRepository from "./src/repository/WarInfoRepository.js";
import WarNewsFeedRepository from "./src/repository/WarNewsFeedRepository.js";
import WarIdRepository from "./src/repository/WarIdRepository.js";
import WarAssignmentRepository from "./src/repository/WarAssignmentRepository.js";

export default {
    getWarSeason: (warId) => WarSeasonRepository.getById(warId),
    getWarInfo: (warId) => WarInfoRepository.getById(warId),
    getWarNewsFeed: (warId, timestamp = null) => WarNewsFeedRepository.getByWarId(warId, timestamp),
    getCurrentWarId: () => WarIdRepository.getCurrentWarId(),
    getWarAssignment: (warId) => WarAssignmentRepository.getWarAssignment(warId),
}
