import Planet from "../CommonNested/Planet.js";
import Race from "../CommonNested/Race.js";

export default class PlanetEvent {
    /** @type number */
    id;
    /** @type Planet */
    planet;
    /** @type number */
    eventType;
    /** @type Race */
    race;
    /** @type number */
    health;
    /** @type number */
    maxHealth;
    /** @type number */
    startTime;
    /** @type number */
    expireTime
    /** @type number */;
    campaignId;
    /** @type number[] */
    jointOperationIds;
}
