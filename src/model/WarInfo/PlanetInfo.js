import Position from "../CommonNested/Position.js";

export default class PlanetInfo {
    /** @type boolean */
    disabled;
    /** @type string */
    settingsHash;
    /** @type number */
    index;
    /** @type string */
    initialOwner;
    /** @type number */
    maxHealth;
    /** @type string */
    name;
    /** @type Position */
    position;
    /** @type string */
    sector;
    /** @type array */
    waypoints;
}
