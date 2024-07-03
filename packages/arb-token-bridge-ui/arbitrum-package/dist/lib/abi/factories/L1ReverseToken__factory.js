"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.L1ReverseToken__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "bridgeBurn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "bridgeMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "isArbitrumEnabled",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "l2CustomTokenAddress",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "maxSubmissionCostForCustomBridge",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxSubmissionCostForRouter",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxGasForCustomBridge",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "maxGasForRouter",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "gasPriceBid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "valueForGateway",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "valueForRouter",
                type: "uint256",
            },
            {
                internalType: "address",
                name: "creditBackAddress",
                type: "address",
            },
        ],
        name: "registerTokenOnL2",
        outputs: [],
        stateMutability: "payable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "sender",
                type: "address",
            },
            {
                internalType: "address",
                name: "recipient",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
];
class L1ReverseToken__factory {
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.L1ReverseToken__factory = L1ReverseToken__factory;
L1ReverseToken__factory.abi = _abi;