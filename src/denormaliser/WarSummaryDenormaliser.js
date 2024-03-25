import WarSummary from "../model/WarSummary.js";
import GalaxyStatisticsDenomaliser from "./GalaxyStatisticsDenomaliser.js";
import PlanetStatisticsDenomaliser from "./PlanetStatisticsDenomaliser.js";

export default class WarSummaryDenormaliser {
    /**
     * @param {object} body
     * @return WarSummary
     */
    static denormaliseWarSummary(body) {
        const warSummary = new WarSummary();
        warSummary.galaxyStats = GalaxyStatisticsDenomaliser.denormaliseGalaxyStatistics(body['galaxy_stats']);
        warSummary.planetStats = body['planets_stats'].map((data) => PlanetStatisticsDenomaliser.denormalisePlanetStatistics(data));

        return warSummary;
    }
}
