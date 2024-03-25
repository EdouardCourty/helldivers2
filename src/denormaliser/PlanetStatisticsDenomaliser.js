import PlanetStatistics from "../model/WarSummary/PlanetStatistics.js";

export default class PlanetStatisticsDenomaliser {
    /**
     * @param {object} data
     * @returns PlanetStatistics
     */
    static denormalisePlanetStatistics(data) {
        const planetStatistics = new PlanetStatistics();
        planetStatistics.planetId = data['planetIndex'];
        planetStatistics.wonMissions = data['missionsWon'];
        planetStatistics.lostMissions = data['missionsLost'];
        planetStatistics.missionTime = data['missionTime'];
        planetStatistics.terminidKills = data['bugKills'];
        planetStatistics.automatonKills = data['automatonKills'];
        planetStatistics.illuminateKills = data['illuminateKills'];
        planetStatistics.firedBullets = data['bulletsFired'];
        planetStatistics.hitBullets = data['bulletsHit'];
        planetStatistics.totalPlayTime = data['timePlayed'];
        planetStatistics.deaths = data['deaths'];
        planetStatistics.revives = data['revives'];
        planetStatistics.friendlyFires = data['friendlies'];
        planetStatistics.missionSuccessRate = data['missionSuccessRate'];
        planetStatistics.accuracy = data['accurracy']; // Yes, the typo comes from the API

        return planetStatistics;
    }
}
