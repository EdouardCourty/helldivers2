import WarSeasonRepository from "./src/repository/WarSeasonRepository.js";

export default {
    getWarSeason: (warId) => WarSeasonRepository.getById(warId),
}
