import PlanetStatus from "./WarSeason/PlanetStatus.js";
import PlanetAttacks from "./WarSeason/PlanetAttack.js";
import Campaign from "./WarSeason/Campaign.js";
import JointOperation from "./WarSeason/JointOperation.js";
import PlanetEvent from "./WarSeason/PlanetEvent.js";
import GlobalEvent from "./WarSeason/GlobalEvent.js";

export default class {
    /** @type number */
    warId;
    /** @type number */
    time;
    /** @type number */
    impactMultiplier;
    /** @type number */
    storyBeatId32;
    /** @type PlanetStatus[] */
    planetStatuses;
    /** @type PlanetAttacks[] */
    planetAttacks;
    /** @type Campaign[] */
    campaigns;
    /** @type [] */
    communityTargets;
    /** @type JointOperation[] */
    jointOperations;
    /** @type PlanetEvent[] */
    planetEvents;
    /** @type [] */
    planetActiveEffects;
    /** @type [] */
    activeElectionPolicyEffects;
    /** @type GlobalEvent[] */
    globalEvents;
    /** @type array */
    superEarthWarResults;
}
