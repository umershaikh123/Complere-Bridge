import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface PausableUpgradeableInterface extends utils.Interface {
    contractName: "PausableUpgradeable";
    functions: {
        "paused()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    events: {
        "Paused(address)": EventFragment;
        "Unpaused(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
}
export type PausedEvent = TypedEvent<[string], {
    account: string;
}>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export type UnpausedEvent = TypedEvent<[string], {
    account: string;
}>;
export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
export interface PausableUpgradeable extends BaseContract {
    contractName: "PausableUpgradeable";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PausableUpgradeableInterface;
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
        paused(overrides?: CallOverrides): Promise<[boolean]>;
    };
    paused(overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        paused(overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Paused(address)"(account?: null): PausedEventFilter;
        Paused(account?: null): PausedEventFilter;
        "Unpaused(address)"(account?: null): UnpausedEventFilter;
        Unpaused(account?: null): UnpausedEventFilter;
    };
    estimateGas: {
        paused(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
