import PlanetInfo from "./WarInfo/PlanetInfo.js";
import HomeWorld from "./WarInfo/HomeWorld.js";

export default class WarInfo {
    /** @type number */
    warId;
    /** @type number */
    startDate;
    /** @type number */
    endDate;
    /** @type number */
    minimumClientVersion;
    /** @type PlanetInfo[] */
    planetInfos;
    /** @type HomeWorld[] */
    homeWorlds;
    /** @type array */
    capitalInfos;
    /** @type array */
    planetPermanentEffects;
}
