import Race from "../../model/CommonNested/Race.js";
import GameAssetMapper from "../../repository/GameAssetMapper.js";

export default class RaceDenormaliser {
    static denormaliseRace(raceIndex) {
        const race = new Race();
        race.index = raceIndex;
        race.name = GameAssetMapper.getRaceName(raceIndex);

        return race;
    }
}
