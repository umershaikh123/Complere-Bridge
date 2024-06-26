import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type ConfigStruct = {
    confirmPeriodBlocks: BigNumberish;
    extraChallengeTimeBlocks: BigNumberish;
    stakeToken: string;
    baseStake: BigNumberish;
    wasmModuleRoot: BytesLike;
    owner: string;
    loserStakeEscrow: string;
    chainId: BigNumberish;
    chainConfig: string;
    genesisBlockNum: BigNumberish;
    sequencerInboxMaxTimeVariation: ISequencerInbox.MaxTimeVariationStruct;
};
export type ConfigStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    ISequencerInbox.MaxTimeVariationStructOutput
] & {
    confirmPeriodBlocks: BigNumber;
    extraChallengeTimeBlocks: BigNumber;
    stakeToken: string;
    baseStake: BigNumber;
    wasmModuleRoot: string;
    owner: string;
    loserStakeEscrow: string;
    chainId: BigNumber;
    chainConfig: string;
    genesisBlockNum: BigNumber;
    sequencerInboxMaxTimeVariation: ISequencerInbox.MaxTimeVariationStructOutput;
};
export type ContractDependenciesStruct = {
    bridge: string;
    sequencerInbox: string;
    inbox: string;
    outbox: string;
    rollupEventInbox: string;
    challengeManager: string;
    rollupAdminLogic: string;
    rollupUserLogic: string;
    validatorUtils: string;
    validatorWalletCreator: string;
};
export type ContractDependenciesStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
] & {
    bridge: string;
    sequencerInbox: string;
    inbox: string;
    outbox: string;
    rollupEventInbox: string;
    challengeManager: string;
    rollupAdminLogic: string;
    rollupUserLogic: string;
    validatorUtils: string;
    validatorWalletCreator: string;
};
export declare namespace ISequencerInbox {
    type MaxTimeVariationStruct = {
        delayBlocks: BigNumberish;
        futureBlocks: BigNumberish;
        delaySeconds: BigNumberish;
        futureSeconds: BigNumberish;
    };
    type MaxTimeVariationStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        delayBlocks: BigNumber;
        futureBlocks: BigNumber;
        delaySeconds: BigNumber;
        futureSeconds: BigNumber;
    };
}
export interface RollupProxyInterface extends utils.Interface {
    contractName: "RollupProxy";
    functions: {
        "initializeProxy((uint64,uint64,address,uint256,bytes32,address,address,uint256,string,uint64,(uint256,uint256,uint256,uint256)),(address,address,address,address,address,address,address,address,address,address))": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "initializeProxy", values: [ConfigStruct, ContractDependenciesStruct]): string;
    decodeFunctionResult(functionFragment: "initializeProxy", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Upgraded(address)": EventFragment;
        "UpgradedSecondary(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpgradedSecondary"): EventFragment;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], {
    previousAdmin: string;
    newAdmin: string;
}>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export type BeaconUpgradedEvent = TypedEvent<[string], {
    beacon: string;
}>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export type UpgradedEvent = TypedEvent<[string], {
    implementation: string;
}>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export type UpgradedSecondaryEvent = TypedEvent<[
    string
], {
    implementation: string;
}>;
export type UpgradedSecondaryEventFilter = TypedEventFilter<UpgradedSecondaryEvent>;
export interface RollupProxy extends BaseContract {
    contractName: "RollupProxy";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RollupProxyInterface;
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
        initializeProxy(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    initializeProxy(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        initializeProxy(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
        "UpgradedSecondary(address)"(implementation?: string | null): UpgradedSecondaryEventFilter;
        UpgradedSecondary(implementation?: string | null): UpgradedSecondaryEventFilter;
    };
    estimateGas: {
        initializeProxy(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        initializeProxy(config: ConfigStruct, connectedContracts: ContractDependenciesStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
