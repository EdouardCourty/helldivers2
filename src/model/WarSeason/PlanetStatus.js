import Planet from "../CommonNested/Planet.js";
import Race from "../CommonNested/Race.js";

export default class PlanetStatus {
    /** @type Planet */
    planet;
    /** @type Race */
    owner;
    /** @type number */
    health;
    /** @type number */
    regenPerSecond;
    /** @type number */
    players;
}
