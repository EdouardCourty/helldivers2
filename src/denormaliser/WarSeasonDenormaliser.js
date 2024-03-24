import WarSeason from "../model/WarSeason.js";
import PlanetStatus from "../model/WarSeason/PlanetStatus.js";
import PlanetAttack from "../model/WarSeason/PlanetAttack.js";
import Campaign from "../model/WarSeason/Campaign.js";
import JointOperation from "../model/WarSeason/JointOperation.js";
import PlanetEvent from "../model/WarSeason/PlanetEvent.js";
import planetAttack from "../model/WarSeason/PlanetAttack.js";
import GlobalEvent from "../model/WarSeason/GlobalEvent.js";

export default class WarSeasonDenormaliser {
    /**
     * @param {object} body
     * @returns WarSeason
     */
    static denormaliseWarSeason(body) {
        const warSeason = new WarSeason();

        warSeason.warId = body['warId'];
        warSeason.time = body['time'];
        warSeason.impactMultiplier = body['impactMultiplier'];
        warSeason.storyBeatId32 = body['storyBeatId32'];
        warSeason.planetStatuses = body['planetStatus'].map((data) => this.denormalisePlanetStatus(data));
        warSeason.planetAttacks = body['planetAttacks'].map((data) => this.denormalisePlanetAttack(data));
        warSeason.campaigns = body['campaigns'].map((data) => this.denormaliseCampaign(data));
        warSeason.communityTargets = body['communityTargets'];
        warSeason.jointOperations = body['jointOperations'].map((data) => this.denormaliseJointOperation(data));
        warSeason.planetEvents = body['planetEvents'].map((data) => this.denormalisePlanetEvent(data));
        warSeason.planetActiveEffects = body['planetActiveEffects'];
        warSeason.activeElectionPolicyEffects = body['activeElectionPolicyEffects'];
        warSeason.globalEvents = body['globalEvents'].map((data) => this.denormaliseGlobalEvent(data));

        return warSeason;
    }

    static denormalisePlanetStatus(data) {
        const planetStatus = new PlanetStatus();
        planetStatus.index = data['index'];
        planetStatus.owner = data['owner'];
        planetStatus.health = data['health'];
        planetStatus.regenPerSecond = data['regenPerSecond'];
        planetStatus.players = data['players'];

        return planetStatus;
    }

    static denormalisePlanetAttack(data) {
        const planetAttack = new PlanetAttack();
        planetAttack.source = data['source'];
        planetAttack.target = data['target'];

        return planetAttack;
    }

    static denormaliseCampaign(data) {
        const campaign = new Campaign();
        campaign.id = data['id'];
        campaign.planetIndex = data['planetIndex'];
        campaign.type = data['type'];
        campaign.count = data['count'];

        return campaign;
    }

    static denormaliseJointOperation(data) {
        const jointOperation = new JointOperation();
        jointOperation.id = data['id'];
        jointOperation.planetIndex = data['index'];
        jointOperation.hqNodeIndex = data['hqNodeIndex'];

        return jointOperation;
    }

    static denormalisePlanetEvent(data) {
        const planetEvent = new PlanetEvent();
        planetEvent.id = data['id'];
        planetEvent.index = data['index'];
        planetEvent.eventType = data['eventType'];
        planetEvent.race = data['race'];
        planetEvent.health = data['health'];
        planetEvent.maxHealth = data['maxHealth'];
        planetEvent.startTime = data['startTime'];
        planetEvent.expireTime = data['expireTime'];
        planetEvent.campaignId = data['campaignId'];
        planetEvent.jointOperationIds = data['jointOperationIds'];

        return planetEvent;
    }

    static denormaliseGlobalEvent(data) {
        const globalEvent = new GlobalEvent();
        globalEvent.eventId = data['eventId'];
        globalEvent.id32 = data['id32'];
        globalEvent.portraitId32 = data['portraitId32'];
        globalEvent.title = data['title'];
        globalEvent.titleId32 = data['titleId32'];
        globalEvent.race = data['race'];
        globalEvent.flag = data['flag'];
        globalEvent.assignmentId32 = data['assignmentId32'];
        globalEvent.effectIds = data['effectIds'];
        globalEvent.planetIndices = data['planetIndices'];

        return globalEvent;
    }
}
