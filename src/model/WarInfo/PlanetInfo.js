import Planet from "../CommonNested/Planet.js";
import Position from "../CommonNested/Position.js";

export default class PlanetInfo {
    /** @type boolean */
    disabled;
    /** @type string */
    settingsHash;
    /** @type Planet */
    planet;
    /** @type string */
    initialOwner;
    /** @type number */
    maxHealth;
    /** @type Position */
    position;
    /** @type string */
    sector;
    /** @type array */
    waypoints;
}
