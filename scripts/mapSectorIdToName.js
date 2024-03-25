import fs from "fs";

import GameAssetMapper from "../src/repository/GameAssetMapper.js";

const sectors = GameAssetMapper.getSectorsData();

const reversed = {};

for (const [sectorName, sectorIds] of Object.entries(sectors)) {
    sectorIds.forEach((sectorId) => {
        reversed[sectorId] = sectorName;
    })
}

fs.writeFileSync('./data/planetSectors.json', JSON.stringify(reversed, null, 2));
