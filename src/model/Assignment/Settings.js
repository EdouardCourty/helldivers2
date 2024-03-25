import Task from "./Task.js";
import Reward from "./Reward.js";

export default class Settings {
    /** @type number */
    type;
    /** @type string */
    title;
    /** @type string */
    brief;
    /** @type string */
    description;
    /** @type Task[] */
    tasks;
    /** @type Reward */
    reward;
    /** @type number */
    flags;
}
