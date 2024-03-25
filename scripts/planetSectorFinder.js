import planetDatabase from "../data/planetDatabase.json" with { type: "json" }
import sectorsPlanets from "../data/sectorPlanets.json" with { type: "json" }
import fs from "fs";

const planetNameSectorMap = {};

Object.entries(sectorsPlanets).forEach(([sectorId, planets]) => {
    planets.forEach((planet) => {
        planetNameSectorMap[planet['name']] = sectorId;
    })
});

const enrichedPlanetDatabase = planetDatabase.map((planetData) => {
    return {
        ...planetData,
        sector: planetNameSectorMap[planetData['name']]
    }
});

fs.writeFileSync('./data/planetDatabase.json', JSON.stringify(enrichedPlanetDatabase, null, 2))
