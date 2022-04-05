var _ = require('lodash');

class Machine {
    public coinWeight: number;


    constructor(_coinWeight: number) {
        this.coinWeight = _coinWeight;
    }

    public createCoins = (n: number) : number => {
        return n * this.coinWeight
    }
}

const AMOUNT_MACHINES = 10;
const COIN_WEIGHT_CORRECT = 100;
const COIN_WEIGHT_FALSE = 10;

const COIN_WEIGHT_DIFF = COIN_WEIGHT_CORRECT - COIN_WEIGHT_FALSE;

const machines: Machine[] = [];

// create n-1 correct machines
for(let i = 0; i < AMOUNT_MACHINES-1; i++) {
    machines.push(new Machine(COIN_WEIGHT_CORRECT));
}

// create one defect machine
machines.push(new Machine(COIN_WEIGHT_FALSE));

const shuffledMachines = _.shuffle(machines);

let totalCoinWeight:number = 0;
let idealCoinWeight:number = 0;

for(let i = 0; i < AMOUNT_MACHINES; i++) {
    totalCoinWeight += shuffledMachines[i].createCoins(i);
    idealCoinWeight += COIN_WEIGHT_CORRECT * i

}

console.log('Current Total coin weight: ', totalCoinWeight);
console.log('If all machines working fine: ', idealCoinWeight);

const diff = idealCoinWeight - totalCoinWeight
console.log('Differnce (Ideal - Current): ', diff);

const defectMachineIndex = (diff / COIN_WEIGHT_DIFF);
console.log(`Defect machine is on index : ${ defectMachineIndex}`);

for(let i = 0; i < AMOUNT_MACHINES; i++) {
    console.log(`Machine ${i}: Coinweight is ${shuffledMachines[i].coinWeight}`)

}

console.log(`Check machine on index ${defectMachineIndex}: Coinweight is ${shuffledMachines[defectMachineIndex].coinWeight}`)

