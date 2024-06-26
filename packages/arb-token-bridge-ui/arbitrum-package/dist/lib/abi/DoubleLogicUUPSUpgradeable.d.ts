import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface DoubleLogicUUPSUpgradeableInterface extends utils.Interface {
    contractName: "DoubleLogicUUPSUpgradeable";
    functions: {
        "proxiableUUID()": FunctionFragment;
        "upgradeSecondaryTo(address)": FunctionFragment;
        "upgradeSecondaryToAndCall(address,bytes)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeSecondaryTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeSecondaryToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeSecondaryTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeSecondaryToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
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
export interface DoubleLogicUUPSUpgradeable extends BaseContract {
    contractName: "DoubleLogicUUPSUpgradeable";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DoubleLogicUUPSUpgradeableInterface;
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
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        upgradeSecondaryTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeSecondaryToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    upgradeSecondaryTo(newImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeSecondaryToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        upgradeSecondaryTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeSecondaryToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
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
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        upgradeSecondaryTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeSecondaryToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        upgradeSecondaryTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeSecondaryToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
