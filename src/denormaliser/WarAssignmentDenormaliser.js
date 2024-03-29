import Assignment from "../model/Assignment.js";
import Settings from "../model/Assignment/Settings.js";
import Task from "../model/Assignment/Task.js";
import Reward from "../model/Assignment/Reward.js";
import GameAssetMapper from "../repository/GameAssetMapper.js";

export default class WarAssignmentDenormaliser {
    /**
     * @param {object} body
     * @returns Assignment[]
     */
    static denormaliseWarAssignment(body) {
        return body.map((data) => {
            const assignment = new Assignment();
            assignment.id32 = data['id32'];
            assignment.progress = data['progress'];
            assignment.expiresIn = data['expiresIn'];
            assignment.settings = this.denormaliseSettings(data['setting']);

            return assignment;
        });
    }

    static denormaliseSettings(data) {
        const settings = new Settings();
        settings.type = data['type'];
        settings.title = data['overrideTitle'];
        settings.brief = data['overrideBrief'];
        settings.description = data['taskDescription'];
        settings.tasks = data['tasks'].map((data) => this.denormaliseTask(data));
        settings.reward = this.denormaliseReward(data['reward']);
        settings.flags = data['flags'];

        return settings;
    }

    static denormaliseTask(data) {
        const task = new Task();
        task.type = data['type'];
        task.values = data['values'];
        task.valueTypes = data['valueTypes'];

        return task;
    }

    static denormaliseReward(data) {
        const reward = new Reward();
        reward.type = data['type'];
        reward.stringType = GameAssetMapper.getRewardString(reward.type);
        reward.id32 = data['id32'];
        reward.amount = data['amount'];

        return reward;
    }
}
