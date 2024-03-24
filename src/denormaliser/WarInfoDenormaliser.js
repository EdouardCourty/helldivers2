import WarInfo from "../model/WarInfo.js";
import PlanetInfo from "../model/WarInfo/PlanetInfo.js";
import Position from "../model/CommonNested/Position.js";
import HomeWorld from "../model/WarInfo/HomeWorld.js";

export default class WarInfoDenormaliser {
    /**
     * @param {object} body
     * @return WarInfo
     */
    static denormaliseWarInfo(body) {
        const warInfo = new WarInfo();

        warInfo.warId = body['warId'];
        warInfo.startDate = body['startDate'];
        warInfo.endDate = body['endDate'];
        warInfo.minimumClientVersion = body['minimumClientVersion'];
        warInfo.planetInfos = body['planetInfos'].map((data) => this.denormalisePlanetInfo(data));
        warInfo.homeWorlds = body['homeWorlds'].map((data) => this.denormaliseHomeWorld(data));
        warInfo.capitalInfos = body['capitalInfos'];
        warInfo.planetPermanentEffects = body['planetPermanentEffects'];

        return warInfo;
    }

    static denormalisePlanetInfo(data) {
        const position = new Position();
        position.x = data['position']['x'];
        position.y = data['position']['y'];

        const planetInfo = new PlanetInfo();
        planetInfo.index = data['index'];
        planetInfo.settingsHash = data['settingsHash'];
        planetInfo.position = position;
        planetInfo.waypoints = data['waypoints'];
        planetInfo.sector = data['sector'];
        planetInfo.maxHealth = data['maxHealth'];
        planetInfo.disabled = !!data['disabled'];
        planetInfo.initialOwner = data['initialOwner'];

        return planetInfo;
    }

    static denormaliseHomeWorld(data) {
        const homeWorld = new HomeWorld();
        homeWorld.race = data['race'];
        homeWorld.planetIndices = data['planetIndices'];

        return homeWorld;
    }
}
