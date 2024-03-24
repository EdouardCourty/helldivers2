import WarSeasonRepository from "./src/repository/WarSeasonRepository.js";
import WarInfoRepository from "./src/repository/WarInfoRepository.js";
import WarNewsFeedRepository from "./src/repository/WarNewsFeedRepository.js";

export default {
    getWarSeason: (warId) => WarSeasonRepository.getById(warId),
    getWarInfo: (warId) => WarInfoRepository.getById(warId),
    getWarNewsFeed: (warId, timestamp = null) => WarNewsFeedRepository.getByWarId(warId, timestamp),
}
