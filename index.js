var _ = require('lodash');
var Machine = /** @class */ (function () {
    function Machine(_coinWeight) {
        var _this = this;
        this.createCoins = function (n) {
            return n * _this.coinWeight;
        };
        this.coinWeight = _coinWeight;
    }
    return Machine;
}());
var AMOUNT_MACHINES = 10;
var COIN_WEIGHT_CORRECT = 100;
var COIN_WEIGHT_FALSE = 10;
var COIN_WEIGHT_DIFF = COIN_WEIGHT_CORRECT - COIN_WEIGHT_FALSE;
var machines = [];
// create n-1 correct machines
for (var i = 0; i < AMOUNT_MACHINES - 1; i++) {
    machines.push(new Machine(COIN_WEIGHT_CORRECT));
}
// create one defect machine
machines.push(new Machine(COIN_WEIGHT_FALSE));
var shuffledMachines = _.shuffle(machines);
var totalCoinWeight = 0;
var idealCoinWeight = 0;
for (var i = 0; i < AMOUNT_MACHINES; i++) {
    totalCoinWeight += shuffledMachines[i].createCoins(i);
    idealCoinWeight += COIN_WEIGHT_CORRECT * i;
}
console.log('Current Total coin weight: ', totalCoinWeight);
console.log('If all machines working fine: ', idealCoinWeight);
var diff = idealCoinWeight - totalCoinWeight;
console.log('Differnce (Ideal - Current): ', diff);
var defectMachineIndex = (diff / COIN_WEIGHT_DIFF);
console.log("Defect machine is on index : ".concat(defectMachineIndex));
console.log("Check machine on index ".concat(defectMachineIndex, ": Coinweight is ").concat(shuffledMachines[defectMachineIndex].coinWeight));
for (var i = 0; i < AMOUNT_MACHINES; i++) {
    console.log("Machine ".concat(i, ": Coinweight is ").concat(shuffledMachines[i].coinWeight));
}
