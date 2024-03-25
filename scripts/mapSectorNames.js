import fs from "fs";

import galaxyPlanets from "../data/galaxyPlanets.json" with { type: "json" }
import GameAssetMapper from "../src/repository/GameAssetMapper.js";

const sectors = {};

galaxyPlanets.forEach((galaxyPlanets) => {
    const planetIndex = galaxyPlanets['index'];
    const sectorId = galaxyPlanets['sector'];

    const sectorName = GameAssetMapper.getPlanetSector(planetIndex);
    sectors[sectorId] = sectorName;
});

fs.writeFileSync('./data/sectorIdNames.json', JSON.stringify(sectors, null, 2));
