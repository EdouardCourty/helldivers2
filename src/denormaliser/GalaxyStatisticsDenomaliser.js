import GalaxyStatistics from "../model/WarSummary/GalaxyStatistics.js";

export default class GalaxyStatisticsDenomaliser {
    /**
     * @param {object} data
     * @returns GalaxyStatistics
     */
    static denormaliseGalaxyStatistics(data) {
        const galaxyStatistics = new GalaxyStatistics();
        galaxyStatistics.wonMissions = data['missionsWon'];
        galaxyStatistics.lostMissions = data['missionsLost'];
        galaxyStatistics.missionTime = data['missionTime'];
        galaxyStatistics.terminidKills = data['bugKills'];
        galaxyStatistics.automatonKills = data['automatonKills'];
        galaxyStatistics.illuminateKills = data['illuminateKills'];
        galaxyStatistics.firedBullets = data['bulletsFired'];
        galaxyStatistics.hitBullets = data['bulletsHit'];
        galaxyStatistics.totalPlayTime = data['timePlayed'];
        galaxyStatistics.deaths = data['deaths'];
        galaxyStatistics.revives = data['revives'];
        galaxyStatistics.friendlyFires = data['friendlies'];
        galaxyStatistics.missionSuccessRate = data['missionSuccessRate'];
        galaxyStatistics.accuracy = data['accurracy']; // Yes, the typo comes form the API

        return galaxyStatistics;
    }
}
