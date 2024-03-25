import helldivers2 from "../index.js";
import fs from "fs";

const response = await helldivers2.getWarInfo(await helldivers2.getCurrentWarId());

const planets = response.planetInfos
    .map((info) => {
        return {
            sectorId: info.sector,
            planet: info.planet
        };
    }).sort((a, b) => {
    return a.sectorId > b.sectorId ? 1 : -1;
});

const sectors = {};

planets.forEach((sorted) => {
    if (sectors[sorted.sectorId]) {
        sectors[sorted.sectorId].push(sorted.planet)
    } else {
        sectors[sorted.sectorId] = [sorted.planet]
    }
});

fs.writeFileSync('./data/sectorPlanets.json', JSON.stringify(sectors, null, 2));
