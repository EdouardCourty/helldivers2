import Planet from "../../model/CommonNested/Planet.js";
import GameAssetMapper from "../../repository/GameAssetMapper.js";

export default class PlanetDenormaliser {
    static denormalisePlanet(planetIndex) {
        const planet = new Planet();
        planet.index = planetIndex;
        planet.name = GameAssetMapper.getPlanetName(planetIndex);

        return planet;
    }
}
