import planets from "../../data/planets.json" with { type: "json" };
import races from "../../data/races.json" with { type: "json" };

export default class GameAssetMapper {
    static getPlanetName(planetIndex) {
        return planets[planetIndex] ?? 'Unknown';
    }

    static getRaceName(raceIndex) {
        return races[raceIndex] ?? 'Unknown';
    }

    static getPlanetData() {
        return planets;
    }

    static getRaces() {
        return races;
    }
}
