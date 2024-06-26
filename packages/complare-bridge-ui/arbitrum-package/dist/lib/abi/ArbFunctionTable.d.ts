import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ArbFunctionTableInterface extends utils.Interface {
    contractName: "ArbFunctionTable";
    functions: {
        "get(address,uint256)": FunctionFragment;
        "size(address)": FunctionFragment;
        "upload(bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "get", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "size", values: [string]): string;
    encodeFunctionData(functionFragment: "upload", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "size", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upload", data: BytesLike): Result;
    events: {};
}
export interface ArbFunctionTable extends BaseContract {
    contractName: "ArbFunctionTable";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ArbFunctionTableInterface;
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
        get(addr: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, boolean, BigNumber]>;
        size(addr: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        upload(buf: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    get(addr: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, boolean, BigNumber]>;
    size(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
    upload(buf: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        get(addr: string, index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber, boolean, BigNumber]>;
        size(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        upload(buf: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        get(addr: string, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        size(addr: string, overrides?: CallOverrides): Promise<BigNumber>;
        upload(buf: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        get(addr: string, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        size(addr: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        upload(buf: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
