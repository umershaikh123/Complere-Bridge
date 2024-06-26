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
export declare namespace ChallengeLib {
    type ParticipantStruct = {
        addr: string;
        timeLeft: BigNumberish;
    };
    type ParticipantStructOutput = [string, BigNumber] & {
        addr: string;
        timeLeft: BigNumber;
    };
    type ChallengeStruct = {
        current: ChallengeLib.ParticipantStruct;
        next: ChallengeLib.ParticipantStruct;
        lastMoveTimestamp: BigNumberish;
        wasmModuleRoot: BytesLike;
        challengeStateHash: BytesLike;
        maxInboxMessages: BigNumberish;
        mode: BigNumberish;
    };
    type ChallengeStructOutput = [
        ChallengeLib.ParticipantStructOutput,
        ChallengeLib.ParticipantStructOutput,
        BigNumber,
        string,
        string,
        BigNumber,
        number
    ] & {
        current: ChallengeLib.ParticipantStructOutput;
        next: ChallengeLib.ParticipantStructOutput;
        lastMoveTimestamp: BigNumber;
        wasmModuleRoot: string;
        challengeStateHash: string;
        maxInboxMessages: BigNumber;
        mode: number;
    };
}
export interface IChallengeManagerInterface extends utils.Interface {
    contractName: "IChallengeManager";
    functions: {
        "challengeInfo(uint64)": FunctionFragment;
        "clearChallenge(uint64)": FunctionFragment;
        "createChallenge(bytes32,uint8[2],tuple[2],uint64,address,address,uint256,uint256)": FunctionFragment;
        "currentResponder(uint64)": FunctionFragment;
        "initialize(address,address,address,address)": FunctionFragment;
        "isTimedOut(uint64)": FunctionFragment;
        "timeout(uint64)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "challengeInfo", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "clearChallenge", values: [BigNumberish]): string;
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
    encodeFunctionData(functionFragment: "currentResponder", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string, string]): string;
    encodeFunctionData(functionFragment: "isTimedOut", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "timeout", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "challengeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "clearChallenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createChallenge", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentResponder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTimedOut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timeout", data: BytesLike): Result;
    events: {
        "Bisected(uint64,bytes32,uint256,uint256,bytes32[])": EventFragment;
        "ChallengeEnded(uint64,uint8)": EventFragment;
        "ExecutionChallengeBegun(uint64,uint256)": EventFragment;
        "InitiatedChallenge(uint64,tuple,tuple)": EventFragment;
        "OneStepProofCompleted(uint64)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Bisected"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ChallengeEnded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutionChallengeBegun"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "InitiatedChallenge"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OneStepProofCompleted"): EventFragment;
}
export type BisectedEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    string[]
], {
    challengeIndex: BigNumber;
    challengeRoot: string;
    challengedSegmentStart: BigNumber;
    challengedSegmentLength: BigNumber;
    chainHashes: string[];
}>;
export type BisectedEventFilter = TypedEventFilter<BisectedEvent>;
export type ChallengeEndedEvent = TypedEvent<[
    BigNumber,
    number
], {
    challengeIndex: BigNumber;
    kind: number;
}>;
export type ChallengeEndedEventFilter = TypedEventFilter<ChallengeEndedEvent>;
export type ExecutionChallengeBegunEvent = TypedEvent<[
    BigNumber,
    BigNumber
], {
    challengeIndex: BigNumber;
    blockSteps: BigNumber;
}>;
export type ExecutionChallengeBegunEventFilter = TypedEventFilter<ExecutionChallengeBegunEvent>;
export type InitiatedChallengeEvent = TypedEvent<[
    BigNumber,
    GlobalStateStructOutput,
    GlobalStateStructOutput
], {
    challengeIndex: BigNumber;
    startState: GlobalStateStructOutput;
    endState: GlobalStateStructOutput;
}>;
export type InitiatedChallengeEventFilter = TypedEventFilter<InitiatedChallengeEvent>;
export type OneStepProofCompletedEvent = TypedEvent<[
    BigNumber
], {
    challengeIndex: BigNumber;
}>;
export type OneStepProofCompletedEventFilter = TypedEventFilter<OneStepProofCompletedEvent>;
export interface IChallengeManager extends BaseContract {
    contractName: "IChallengeManager";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IChallengeManagerInterface;
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
        challengeInfo(challengeIndex_: BigNumberish, overrides?: CallOverrides): Promise<[ChallengeLib.ChallengeStructOutput]>;
        clearChallenge(challengeIndex_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createChallenge(wasmModuleRoot_: BytesLike, startAndEndMachineStatuses_: [BigNumberish, BigNumberish], startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct], numBlocks: BigNumberish, asserter_: string, challenger_: string, asserterTimeLeft_: BigNumberish, challengerTimeLeft_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        currentResponder(challengeIndex: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        initialize(resultReceiver_: string, sequencerInbox_: string, bridge_: string, osp_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isTimedOut(challengeIndex: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        timeout(challengeIndex_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    challengeInfo(challengeIndex_: BigNumberish, overrides?: CallOverrides): Promise<ChallengeLib.ChallengeStructOutput>;
    clearChallenge(challengeIndex_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createChallenge(wasmModuleRoot_: BytesLike, startAndEndMachineStatuses_: [BigNumberish, BigNumberish], startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct], numBlocks: BigNumberish, asserter_: string, challenger_: string, asserterTimeLeft_: BigNumberish, challengerTimeLeft_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    currentResponder(challengeIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;
    initialize(resultReceiver_: string, sequencerInbox_: string, bridge_: string, osp_: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isTimedOut(challengeIndex: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    timeout(challengeIndex_: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        challengeInfo(challengeIndex_: BigNumberish, overrides?: CallOverrides): Promise<ChallengeLib.ChallengeStructOutput>;
        clearChallenge(challengeIndex_: BigNumberish, overrides?: CallOverrides): Promise<void>;
        createChallenge(wasmModuleRoot_: BytesLike, startAndEndMachineStatuses_: [BigNumberish, BigNumberish], startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct], numBlocks: BigNumberish, asserter_: string, challenger_: string, asserterTimeLeft_: BigNumberish, challengerTimeLeft_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        currentResponder(challengeIndex: BigNumberish, overrides?: CallOverrides): Promise<string>;
        initialize(resultReceiver_: string, sequencerInbox_: string, bridge_: string, osp_: string, overrides?: CallOverrides): Promise<void>;
        isTimedOut(challengeIndex: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        timeout(challengeIndex_: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Bisected(uint64,bytes32,uint256,uint256,bytes32[])"(challengeIndex?: BigNumberish | null, challengeRoot?: BytesLike | null, challengedSegmentStart?: null, challengedSegmentLength?: null, chainHashes?: null): BisectedEventFilter;
        Bisected(challengeIndex?: BigNumberish | null, challengeRoot?: BytesLike | null, challengedSegmentStart?: null, challengedSegmentLength?: null, chainHashes?: null): BisectedEventFilter;
        "ChallengeEnded(uint64,uint8)"(challengeIndex?: BigNumberish | null, kind?: null): ChallengeEndedEventFilter;
        ChallengeEnded(challengeIndex?: BigNumberish | null, kind?: null): ChallengeEndedEventFilter;
        "ExecutionChallengeBegun(uint64,uint256)"(challengeIndex?: BigNumberish | null, blockSteps?: null): ExecutionChallengeBegunEventFilter;
        ExecutionChallengeBegun(challengeIndex?: BigNumberish | null, blockSteps?: null): ExecutionChallengeBegunEventFilter;
        "InitiatedChallenge(uint64,tuple,tuple)"(challengeIndex?: BigNumberish | null, startState?: null, endState?: null): InitiatedChallengeEventFilter;
        InitiatedChallenge(challengeIndex?: BigNumberish | null, startState?: null, endState?: null): InitiatedChallengeEventFilter;
        "OneStepProofCompleted(uint64)"(challengeIndex?: BigNumberish | null): OneStepProofCompletedEventFilter;
        OneStepProofCompleted(challengeIndex?: BigNumberish | null): OneStepProofCompletedEventFilter;
    };
    estimateGas: {
        challengeInfo(challengeIndex_: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        clearChallenge(challengeIndex_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createChallenge(wasmModuleRoot_: BytesLike, startAndEndMachineStatuses_: [BigNumberish, BigNumberish], startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct], numBlocks: BigNumberish, asserter_: string, challenger_: string, asserterTimeLeft_: BigNumberish, challengerTimeLeft_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        currentResponder(challengeIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(resultReceiver_: string, sequencerInbox_: string, bridge_: string, osp_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isTimedOut(challengeIndex: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        timeout(challengeIndex_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        challengeInfo(challengeIndex_: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        clearChallenge(challengeIndex_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createChallenge(wasmModuleRoot_: BytesLike, startAndEndMachineStatuses_: [BigNumberish, BigNumberish], startAndEndGlobalStates_: [GlobalStateStruct, GlobalStateStruct], numBlocks: BigNumberish, asserter_: string, challenger_: string, asserterTimeLeft_: BigNumberish, challengerTimeLeft_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        currentResponder(challengeIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(resultReceiver_: string, sequencerInbox_: string, bridge_: string, osp_: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isTimedOut(challengeIndex: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timeout(challengeIndex_: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
