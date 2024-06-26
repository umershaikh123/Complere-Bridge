import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BridgeStub, BridgeStubInterface } from "../BridgeStub";
type BridgeStubConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BridgeStub__factory extends ContractFactory {
    constructor(...args: BridgeStubConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BridgeStub>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BridgeStub;
    connect(signer: Signer): BridgeStub__factory;
    static readonly contractName: "BridgeStub";
    readonly contractName: "BridgeStub";
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610c91806100206000396000f3fe6080604052600436106101345760003560e01c80639e5d4c49116100ab578063cee3d7281161006f578063cee3d72814610372578063d5719dc21461038d578063e76f5c8d146103ad578063e77145f4146101cd578063eca067ad146103cd578063ee35f327146103e257600080fd5b80639e5d4c49146102d3578063ab5d894314610301578063ae60bd1314610321578063c4d66de81461027b578063cb23bcb51461035d57600080fd5b80635fca4a16116100fd5780635fca4a16146101ef5780637a88b1071461020557806386598a56146102285780638db5993b14610268578063919cc7061461027b578063945e11471461029b57600080fd5b806284120c1461013957806316bf55791461015d578063413b35bd1461017d57806347fb24c5146101ad5780634f61f850146101cf575b600080fd5b34801561014557600080fd5b506005545b6040519081526020015b60405180910390f35b34801561016957600080fd5b5061014a6101783660046109c1565b610402565b34801561018957600080fd5b5061019d6101983660046109f2565b610423565b6040519015158152602001610154565b3480156101b957600080fd5b506101cd6101c8366004610a16565b610446565b005b3480156101db57600080fd5b506101cd6101ea3660046109f2565b61065d565b3480156101fb57600080fd5b5061014a60075481565b34801561021157600080fd5b5061014a610220366004610a54565b600092915050565b34801561023457600080fd5b50610248610243366004610a80565b6106b1565b604080519485526020850193909352918301526060820152608001610154565b61014a610276366004610ab2565b6107e8565b34801561028757600080fd5b506101cd6102963660046109f2565b610851565b3480156102a757600080fd5b506102bb6102b63660046109c1565b610869565b6040516001600160a01b039091168152602001610154565b3480156102df57600080fd5b506102f36102ee366004610af9565b610893565b604051610154929190610b82565b34801561030d57600080fd5b506003546102bb906001600160a01b031681565b34801561032d57600080fd5b5061019d61033c3660046109f2565b6001600160a01b031660009081526020819052604090206001015460ff1690565b34801561036957600080fd5b506102bb610423565b34801561037e57600080fd5b506101cd610296366004610a16565b34801561039957600080fd5b5061014a6103a83660046109c1565b6108af565b3480156103b957600080fd5b506102bb6103c83660046109c1565b6108bf565b3480156103d957600080fd5b5060045461014a565b3480156103ee57600080fd5b506006546102bb906001600160a01b031681565b6005818154811061041257600080fd5b600091825260209091200154905081565b600060405162461bcd60e51b815260040161043d90610be1565b60405180910390fd5b6001600160a01b03821660008181526020818152604091829020600181015492518515158152909360ff90931692917f6675ce8882cb71637de5903a193d218cc0544be9c0650cb83e0955f6aa2bf521910160405180910390a282151581151514156104b25750505050565b821561053e5760408051808201825260018054825260208083018281526001600160a01b0389166000818152928390529482209351845551928201805460ff1916931515939093179092558054808201825591527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319169091179055610657565b6001805461054d908290610c0a565b8154811061055d5761055d610c2f565b6000918252602090912001548254600180546001600160a01b0390931692909190811061058c5761058c610c2f565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b03160217905550816000015460008060018560000154815481106105d9576105d9610c2f565b60009182526020808320909101546001600160a01b03168352820192909252604001902055600180548061060f5761060f610c45565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b038616825281905260408120908155600101805460ff191690555b50505050565b600680546001600160a01b0319166001600160a01b0383169081179091556040519081527f8c1e6003ed33ca6748d4ad3dd4ecc949065c89dceb31fdf546a5289202763c6a9060200160405180910390a150565b60008060008085600754141580156106c857508515155b80156106d5575060075415155b156107015760075460405163e2051feb60e01b815260048101919091526024810187905260440161043d565b60078590556005549350831561073f576005805461072190600190610c0a565b8154811061073157610731610c2f565b906000526020600020015492505b8615610770576004610752600189610c0a565b8154811061076257610762610c2f565b906000526020600020015491505b60408051602081018590529081018990526060810183905260800160408051601f198184030181529190528051602090910120600580546001810182556000919091527f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0018190559398929750909550919350915050565b3360009081526020819052604081206001015460ff1661083b5760405162461bcd60e51b815260206004820152600e60248201526d09c9ea8be8ca49e9abe929c849eb60931b604482015260640161043d565b6108498484434248876108cf565b949350505050565b60405162461bcd60e51b815260040161043d90610be1565b6002818154811061087957600080fd5b6000918252602090912001546001600160a01b0316905081565b6000606060405162461bcd60e51b815260040161043d90610be1565b6004818154811061041257600080fd5b6001818154811061087957600080fd5b60045460408051600060208083018290526021830182905260358301829052603d8301829052604583018290526065830182905260858084018790528451808503909101815260a5909301909352815191909201209091906000821561095a57600461093c600185610c0a565b8154811061094c5761094c610c2f565b906000526020600020015490505b6040805160208082019390935280820193909352805180840382018152606090930190528151910120600480546001810182556000919091527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0155979650505050505050565b6000602082840312156109d357600080fd5b5035919050565b6001600160a01b03811681146109ef57600080fd5b50565b600060208284031215610a0457600080fd5b8135610a0f816109da565b9392505050565b60008060408385031215610a2957600080fd5b8235610a34816109da565b915060208301358015158114610a4957600080fd5b809150509250929050565b60008060408385031215610a6757600080fd5b8235610a72816109da565b946020939093013593505050565b60008060008060808587031215610a9657600080fd5b5050823594602084013594506040840135936060013592509050565b600080600060608486031215610ac757600080fd5b833560ff81168114610ad857600080fd5b92506020840135610ae8816109da565b929592945050506040919091013590565b60008060008060608587031215610b0f57600080fd5b8435610b1a816109da565b935060208501359250604085013567ffffffffffffffff80821115610b3e57600080fd5b818701915087601f830112610b5257600080fd5b813581811115610b6157600080fd5b886020828501011115610b7357600080fd5b95989497505060200194505050565b821515815260006020604081840152835180604085015260005b81811015610bb857858101830151858201606001528201610b9c565b81811115610bca576000606083870101525b50601f01601f191692909201606001949350505050565b6020808252600f908201526e1393d517d253541311535153951151608a1b604082015260600190565b600082821015610c2a57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220c717d885f8b456b39c2c6187e1051fe42a601fe05ef89db724544e23994980f364736f6c63430008090033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): BridgeStubInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BridgeStub;
}
export {};
