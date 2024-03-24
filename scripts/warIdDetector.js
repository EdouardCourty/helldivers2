import WarInfoRepository from "../src/repository/WarInfoRepository.js";

const START_ID = 1;
const END_ID = 1500;

let currentId = START_ID;

const existing = [];

while (currentId < END_ID) {
    try {
        const response = await WarInfoRepository.getById(currentId);
        existing.push(currentId);
        console.log(`War ${currentId} exists`);
    } catch (error) {
        console.log(`War ${currentId} is invalid`);
    } finally {
        currentId++;
    }
}

console.log('Valid war Ids: ');
console.log(existing);
