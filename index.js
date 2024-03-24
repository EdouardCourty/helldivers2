import WarSeasonRepository from "./src/repository/WarSeasonRepository.js";
import WarInfoRepository from "./src/repository/WarInfoRepository.js";

export default {
    getWarSeason: (warId) => WarSeasonRepository.getById(warId),
    getWarInfo: (warId) => WarInfoRepository.getById(warId),
}
