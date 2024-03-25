import planets from "../../data/planets.json" with { type: "json" };
import races from "../../data/races.json" with { type: "json" };
import sectors from "../../data/sectors.json" with { type: "json" };
import planetSectors from "../../data/planetSectors.json" with { type: "json" };

export default class GameAssetMapper {
    static getPlanetName(planetIndex) {
        return planets[planetIndex] ?? 'Unknown';
    }

    static getRaceName(raceIndex) {
        return races[raceIndex] ?? 'Unknown';
    }

    static getPlanetSector(planetIndex) {
        return planetSectors[planetIndex] ?? 'Unknown';
    }

    static getPlanetData() {
        return planets;
    }

    static getSectorsData() {
        return sectors;
    }

    static getRaces() {
        return races;
    }

    static getPlanetSectors() {
        return planetSectors;
    }
}
