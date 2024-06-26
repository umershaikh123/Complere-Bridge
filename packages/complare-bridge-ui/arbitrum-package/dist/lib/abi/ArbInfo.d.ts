import { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbInfoInterface extends utils.Interface {
    contractName: "ArbInfo";
    functions: {
        "getBalance(address)": FunctionFragment;
        "getCode(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "getBalance", values: [string]): string;
    encodeFunctionData(functionFragment: "getCode", values: [string]): string;
    decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCode", data: BytesLike): Result;
    events: {};
}
export interface ArbInfo extends BaseContract {
    contractName: "ArbInfo";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbInfoInterface;
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
        getBalance(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        getCode(account: string, overrides?: CallOverrides): Promise<[string]>;
    };
    getBalance(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    getCode(account: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getBalance(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCode(account: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getBalance(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getCode(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getBalance(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCode(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
