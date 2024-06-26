import { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface L2ArbitrumMessengerInterface extends utils.Interface {
    contractName: "L2ArbitrumMessenger";
    functions: {};
    events: {
        "TxToL1(address,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TxToL1"): EventFragment;
}
export type TxToL1Event = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], {
    _from: string;
    _to: string;
    _id: BigNumber;
    _data: string;
}>;
export type TxToL1EventFilter = TypedEventFilter<TxToL1Event>;
export interface L2ArbitrumMessenger extends BaseContract {
    contractName: "L2ArbitrumMessenger";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L2ArbitrumMessengerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {};
    callStatic: {};
    filters: {
        "TxToL1(address,address,uint256,bytes)"(_from?: string | null, _to?: string | null, _id?: BigNumberish | null, _data?: null): TxToL1EventFilter;
        TxToL1(_from?: string | null, _to?: string | null, _id?: BigNumberish | null, _data?: null): TxToL1EventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
