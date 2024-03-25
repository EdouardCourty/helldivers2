import planets from "../../data/planets.json" with { type: "json" };
import races from "../../data/races.json" with { type: "json" };
import sectors from "../../data/sectors.json" with { type: "json" };

export default class GameAssetMapper {
    static getPlanetName(planetIndex) {
        return planets[planetIndex] ?? 'Unknown';
    }

    static getRaceName(raceIndex) {
        return races[raceIndex] ?? 'Unknown';
    }

    static getPlanetSector(planetIndex) {
        for (const [sectorName, planetIds] of Object.entries(sectors)) {
            if (planetIds.includes(planetIndex)) {
                return sectorName;
            }
        }
    }
}
