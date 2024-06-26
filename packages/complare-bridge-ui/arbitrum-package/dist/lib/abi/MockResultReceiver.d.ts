import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type GlobalStateStruct = {
    bytes32Vals: [BytesLike, BytesLike];
    u64Vals: [BigNumberish, BigNumberish];
};
export type GlobalStateStructOutput = [
    [
        string,
        string
    ],
    [
        BigNumber,
        BigNumber
    ]
] & {
    bytes32Vals: [string, string];
    u64Vals: [BigNumber, BigNumber];
};
export interface MockResultReceiverInterface extends utils.Interface {
    contractName: "MockResultReceiver";
    functions: {
        "challengeIndex()": FunctionFragment;
        "completeChallenge(uint256,address,address)": FunctionFragment;
        "createChallenge(bytes32,uint8[2],tuple[2],uint64,address,address,uint256,uint256)": FunctionFragment;
        "loser()": FunctionFragment;
        "manager()": FunctionFragment;
        "winner()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "challengeIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "completeChallenge", values: [BigNumberish, string, string]): string;
    encodeFunctionData(functionFragment: "createChallenge", values: [
        BytesLike,
        [
            BigNumberish,
            BigNumberish
        ],
        [
            GlobalStateStruct,
            GlobalStateStruct
        ],
        BigNumberish,
        string,
        string,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "loser", values?: undefined): string;
    encodeFunctionData(functionFragment: "manager", values?: undefined): string;
    encodeFunctionData(functionFragment: "winner", values?: undefined): string;
    decodeFunctionResult(functionFragment: "challengeIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "completeChallenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createChallenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "loser", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "winner", data: BytesLike): Result;
    events: {
        "ChallengeCompleted(uint256,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ChallengeCompleted"): EventFragment;
}
export type ChallengeCompletedEvent = TypedEvent<[
    BigNumber,
    string,
    string
], {
    challengeIndex: BigNumber;
    winner: string;
    loser: string;
}>;
export type ChallengeCompletedEventFilter = TypedEventFilter<ChallengeCompletedEvent>;
export interface MockResultReceiver extends BaseContract {
    contractName: "MockResultReceiver";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockResultReceiverInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        challengeIndex(overrides?: CallOverrides): Promise<[BigNumber]>;
        completeChallenge(challengeIndex_: BigNumberish, winner_: string, loser_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createChallenge(wasmModuleRoot_: BytesLike, startAndEndMachineStatuses_: [BigNumberish, BigNumberish], startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct], numBlocks: BigNumberish, asserter_: string, challenger_: string, asserterTimeLeft_: BigNumberish, challengerTimeLeft_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        loser(overrides?: CallOverrides): Promise<[string]>;
        manager(overrides?: CallOverrides): Promise<[string]>;
        winner(overrides?: CallOverrides): Promise<[string]>;
    };
    challengeIndex(overrides?: CallOverrides): Promise<BigNumber>;
    completeChallenge(challengeIndex_: BigNumberish, winner_: string, loser_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createChallenge(wasmModuleRoot_: BytesLike, startAndEndMachineStatuses_: [BigNumberish, BigNumberish], startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct], numBlocks: BigNumberish, asserter_: string, challenger_: string, asserterTimeLeft_: BigNumberish, challengerTimeLeft_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    loser(overrides?: CallOverrides): Promise<string>;
    manager(overrides?: CallOverrides): Promise<string>;
    winner(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        challengeIndex(overrides?: CallOverrides): Promise<BigNumber>;
        completeChallenge(challengeIndex_: BigNumberish, winner_: string, loser_: string, overrides?: CallOverrides): Promise<void>;
        createChallenge(wasmModuleRoot_: BytesLike, startAndEndMachineStatuses_: [BigNumberish, BigNumberish], startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct], numBlocks: BigNumberish, asserter_: string, challenger_: string, asserterTimeLeft_: BigNumberish, challengerTimeLeft_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        loser(overrides?: CallOverrides): Promise<string>;
        manager(overrides?: CallOverrides): Promise<string>;
        winner(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "ChallengeCompleted(uint256,address,address)"(challengeIndex?: BigNumberish | null, winner?: string | null, loser?: string | null): ChallengeCompletedEventFilter;
        ChallengeCompleted(challengeIndex?: BigNumberish | null, winner?: string | null, loser?: string | null): ChallengeCompletedEventFilter;
    };
    estimateGas: {
        challengeIndex(overrides?: CallOverrides): Promise<BigNumber>;
        completeChallenge(challengeIndex_: BigNumberish, winner_: string, loser_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createChallenge(wasmModuleRoot_: BytesLike, startAndEndMachineStatuses_: [BigNumberish, BigNumberish], startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct], numBlocks: BigNumberish, asserter_: string, challenger_: string, asserterTimeLeft_: BigNumberish, challengerTimeLeft_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        loser(overrides?: CallOverrides): Promise<BigNumber>;
        manager(overrides?: CallOverrides): Promise<BigNumber>;
        winner(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        challengeIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        completeChallenge(challengeIndex_: BigNumberish, winner_: string, loser_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createChallenge(wasmModuleRoot_: BytesLike, startAndEndMachineStatuses_: [BigNumberish, BigNumberish], startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct], numBlocks: BigNumberish, asserter_: string, challenger_: string, asserterTimeLeft_: BigNumberish, challengerTimeLeft_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        loser(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        winner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
