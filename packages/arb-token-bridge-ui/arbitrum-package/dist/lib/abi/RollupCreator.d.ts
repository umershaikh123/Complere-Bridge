import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export declare namespace RollupCreator {
    type RollupDeploymentParamsStruct = {
        config: ConfigStruct;
        batchPoster: string;
        validators: string[];
        maxDataSize: BigNumberish;
        nativeToken: string;
        deployFactoriesToL2: boolean;
        maxFeePerGasForRetryables: BigNumberish;
    };
    type RollupDeploymentParamsStructOutput = [
        ConfigStructOutput,
        string,
        string[],
        BigNumber,
        string,
        boolean,
        BigNumber
    ] & {
        config: ConfigStructOutput;
        batchPoster: string;
        validators: string[];
        maxDataSize: BigNumber;
        nativeToken: string;
        deployFactoriesToL2: boolean;
        maxFeePerGasForRetryables: BigNumber;
    };
}
export interface RollupCreatorInterface extends utils.Interface {
    contractName: "RollupCreator";
    functions: {
        "bridgeCreator()": FunctionFragment;
        "challengeManagerTemplate()": FunctionFragment;
        "createRollup(((uint64,uint64,address,uint256,bytes32,address,address,uint256,string,uint64,(uint256,uint256,uint256,uint256)),address,address[],uint256,address,bool,uint256))": FunctionFragment;
        "l2FactoriesDeployer()": FunctionFragment;
        "osp()": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "rollupAdminLogic()": FunctionFragment;
        "rollupUserLogic()": FunctionFragment;
        "setTemplates(address,address,address,address,address,address,address,address,address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "upgradeExecutorLogic()": FunctionFragment;
        "validatorUtils()": FunctionFragment;
        "validatorWalletCreator()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "bridgeCreator", values?: undefined): string;
    encodeFunctionData(functionFragment: "challengeManagerTemplate", values?: undefined): string;
    encodeFunctionData(functionFragment: "createRollup", values: [RollupCreator.RollupDeploymentParamsStruct]): string;
    encodeFunctionData(functionFragment: "l2FactoriesDeployer", values?: undefined): string;
    encodeFunctionData(functionFragment: "osp", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "rollupAdminLogic", values?: undefined): string;
    encodeFunctionData(functionFragment: "rollupUserLogic", values?: undefined): string;
    encodeFunctionData(functionFragment: "setTemplates", values: [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
    ]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeExecutorLogic", values?: undefined): string;
    encodeFunctionData(functionFragment: "validatorUtils", values?: undefined): string;
    encodeFunctionData(functionFragment: "validatorWalletCreator", values?: undefined): string;
    decodeFunctionResult(functionFragment: "bridgeCreator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "challengeManagerTemplate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createRollup", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "l2FactoriesDeployer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "osp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollupAdminLogic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rollupUserLogic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTemplates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeExecutorLogic", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorUtils", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validatorWalletCreator", data: BytesLike): Result;
    events: {
        "OwnershipTransferred(address,address)": EventFragment;
        "RollupCreated(address,address,address,address,address,address,address,address,address,address,address,address)": EventFragment;
        "TemplatesUpdated()": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RollupCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TemplatesUpdated"): EventFragment;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export type RollupCreatedEvent = TypedEvent<[
    string,
    string,
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
], {
    rollupAddress: string;
    nativeToken: string;
    inboxAddress: string;
    outbox: string;
    rollupEventInbox: string;
    challengeManager: string;
    adminProxy: string;
    sequencerInbox: string;
    bridge: string;
    upgradeExecutor: string;
    validatorUtils: string;
    validatorWalletCreator: string;
}>;
export type RollupCreatedEventFilter = TypedEventFilter<RollupCreatedEvent>;
export type TemplatesUpdatedEvent = TypedEvent<[], {}>;
export type TemplatesUpdatedEventFilter = TypedEventFilter<TemplatesUpdatedEvent>;
export interface RollupCreator extends BaseContract {
    contractName: "RollupCreator";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RollupCreatorInterface;
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
        bridgeCreator(overrides?: CallOverrides): Promise<[string]>;
        challengeManagerTemplate(overrides?: CallOverrides): Promise<[string]>;
        createRollup(deployParams: RollupCreator.RollupDeploymentParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        l2FactoriesDeployer(overrides?: CallOverrides): Promise<[string]>;
        osp(overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        rollupAdminLogic(overrides?: CallOverrides): Promise<[string]>;
        rollupUserLogic(overrides?: CallOverrides): Promise<[string]>;
        setTemplates(_bridgeCreator: string, _osp: string, _challengeManagerLogic: string, _rollupAdminLogic: string, _rollupUserLogic: string, _upgradeExecutorLogic: string, _validatorUtils: string, _validatorWalletCreator: string, _l2FactoriesDeployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeExecutorLogic(overrides?: CallOverrides): Promise<[string]>;
        validatorUtils(overrides?: CallOverrides): Promise<[string]>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<[string]>;
    };
    bridgeCreator(overrides?: CallOverrides): Promise<string>;
    challengeManagerTemplate(overrides?: CallOverrides): Promise<string>;
    createRollup(deployParams: RollupCreator.RollupDeploymentParamsStruct, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    l2FactoriesDeployer(overrides?: CallOverrides): Promise<string>;
    osp(overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    rollupAdminLogic(overrides?: CallOverrides): Promise<string>;
    rollupUserLogic(overrides?: CallOverrides): Promise<string>;
    setTemplates(_bridgeCreator: string, _osp: string, _challengeManagerLogic: string, _rollupAdminLogic: string, _rollupUserLogic: string, _upgradeExecutorLogic: string, _validatorUtils: string, _validatorWalletCreator: string, _l2FactoriesDeployer: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeExecutorLogic(overrides?: CallOverrides): Promise<string>;
    validatorUtils(overrides?: CallOverrides): Promise<string>;
    validatorWalletCreator(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        bridgeCreator(overrides?: CallOverrides): Promise<string>;
        challengeManagerTemplate(overrides?: CallOverrides): Promise<string>;
        createRollup(deployParams: RollupCreator.RollupDeploymentParamsStruct, overrides?: CallOverrides): Promise<string>;
        l2FactoriesDeployer(overrides?: CallOverrides): Promise<string>;
        osp(overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        rollupAdminLogic(overrides?: CallOverrides): Promise<string>;
        rollupUserLogic(overrides?: CallOverrides): Promise<string>;
        setTemplates(_bridgeCreator: string, _osp: string, _challengeManagerLogic: string, _rollupAdminLogic: string, _rollupUserLogic: string, _upgradeExecutorLogic: string, _validatorUtils: string, _validatorWalletCreator: string, _l2FactoriesDeployer: string, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        upgradeExecutorLogic(overrides?: CallOverrides): Promise<string>;
        validatorUtils(overrides?: CallOverrides): Promise<string>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "RollupCreated(address,address,address,address,address,address,address,address,address,address,address,address)"(rollupAddress?: string | null, nativeToken?: string | null, inboxAddress?: null, outbox?: null, rollupEventInbox?: null, challengeManager?: null, adminProxy?: null, sequencerInbox?: null, bridge?: null, upgradeExecutor?: null, validatorUtils?: null, validatorWalletCreator?: null): RollupCreatedEventFilter;
        RollupCreated(rollupAddress?: string | null, nativeToken?: string | null, inboxAddress?: null, outbox?: null, rollupEventInbox?: null, challengeManager?: null, adminProxy?: null, sequencerInbox?: null, bridge?: null, upgradeExecutor?: null, validatorUtils?: null, validatorWalletCreator?: null): RollupCreatedEventFilter;
        "TemplatesUpdated()"(): TemplatesUpdatedEventFilter;
        TemplatesUpdated(): TemplatesUpdatedEventFilter;
    };
    estimateGas: {
        bridgeCreator(overrides?: CallOverrides): Promise<BigNumber>;
        challengeManagerTemplate(overrides?: CallOverrides): Promise<BigNumber>;
        createRollup(deployParams: RollupCreator.RollupDeploymentParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        l2FactoriesDeployer(overrides?: CallOverrides): Promise<BigNumber>;
        osp(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        rollupAdminLogic(overrides?: CallOverrides): Promise<BigNumber>;
        rollupUserLogic(overrides?: CallOverrides): Promise<BigNumber>;
        setTemplates(_bridgeCreator: string, _osp: string, _challengeManagerLogic: string, _rollupAdminLogic: string, _rollupUserLogic: string, _upgradeExecutorLogic: string, _validatorUtils: string, _validatorWalletCreator: string, _l2FactoriesDeployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeExecutorLogic(overrides?: CallOverrides): Promise<BigNumber>;
        validatorUtils(overrides?: CallOverrides): Promise<BigNumber>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        bridgeCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        challengeManagerTemplate(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createRollup(deployParams: RollupCreator.RollupDeploymentParamsStruct, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        l2FactoriesDeployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        osp(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        rollupAdminLogic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rollupUserLogic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setTemplates(_bridgeCreator: string, _osp: string, _challengeManagerLogic: string, _rollupAdminLogic: string, _rollupUserLogic: string, _upgradeExecutorLogic: string, _validatorUtils: string, _validatorWalletCreator: string, _l2FactoriesDeployer: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeExecutorLogic(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorUtils(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validatorWalletCreator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
