import { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface L1ArbitrumMessengerInterface extends utils.Interface {
    contractName: "L1ArbitrumMessenger";
    functions: {};
    events: {
        "TxToL2(address,address,uint256,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TxToL2"): EventFragment;
}
export type TxToL2Event = TypedEvent<[
    string,
    string,
    BigNumber,
    string
], {
    _from: string;
    _to: string;
    _seqNum: BigNumber;
    _data: string;
}>;
export type TxToL2EventFilter = TypedEventFilter<TxToL2Event>;
export interface L1ArbitrumMessenger extends BaseContract {
    contractName: "L1ArbitrumMessenger";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: L1ArbitrumMessengerInterface;
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
        "TxToL2(address,address,uint256,bytes)"(_from?: string | null, _to?: string | null, _seqNum?: BigNumberish | null, _data?: null): TxToL2EventFilter;
        TxToL2(_from?: string | null, _to?: string | null, _seqNum?: BigNumberish | null, _data?: null): TxToL2EventFilter;
    };
    estimateGas: {};
    populateTransaction: {};
}
