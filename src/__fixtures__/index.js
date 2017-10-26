/*
pragma solidity ^0.4.10;

contract test {
    function multiply(uint a) constant returns(uint d) {
        return a * 7;
    }
}
*/
export const sampleContract = {
  bytecode: '6060604052341561000f57600080fd5b60b18061001d6000396000f300606060405260043610603f576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063c6888fa1146044575b600080fd5b3415604e57600080fd5b606260048080359060200190919050506078565b6040518082815260200191505060405180910390f35b60006007820290509190505600a165627a7a723058201046071c4905b8ae0e61449b28177ff713c0b07fbacf7bd6560559ddc5d7b9070029',
  abi: JSON.parse('[{"constant":true,"inputs":[{"name":"a","type":"uint256"}],"name":"multiply","outputs":[{"name":"d","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]')
}