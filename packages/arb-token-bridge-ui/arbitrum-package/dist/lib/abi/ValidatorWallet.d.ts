import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface ValidatorWalletInterface extends utils.Interface {
    contractName: "ValidatorWallet";
    functions: {
        "allowedExecutorDestinations(address)": FunctionFragment;
        "executeTransaction(bytes,address,uint256)": FunctionFragment;
        "executeTransactionWithGasRefunder(address,bytes,address,uint256)": FunctionFragment;
        "executeTransactions(bytes[],address[],uint256[])": FunctionFragment;
        "executeTransactionsWithGasRefunder(address,bytes[],address[],uint256[])": FunctionFragment;
        "executors(address)": FunctionFragment;
        "initialize(address,address,address[])": FunctionFragment;
        "owner()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setAllowedExecutorDestinations(address[],bool[])": FunctionFragment;
        "setExecutor(address[],bool[])": FunctionFragment;
        "timeoutChallenges(address,uint64[])": FunctionFragment;
        "timeoutChallengesWithGasRefunder(address,address,uint64[])": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "validateExecuteTransaction(address)": FunctionFragment;
        "withdrawEth(uint256,address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "allowedExecutorDestinations", values: [string]): string;
    encodeFunctionData(functionFragment: "executeTransaction", values: [BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeTransactionWithGasRefunder", values: [string, BytesLike, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "executeTransactions", values: [BytesLike[], string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "executeTransactionsWithGasRefunder", values: [string, BytesLike[], string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "executors", values: [string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string[]]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAllowedExecutorDestinations", values: [string[], boolean[]]): string;
    encodeFunctionData(functionFragment: "setExecutor", values: [string[], boolean[]]): string;
    encodeFunctionData(functionFragment: "timeoutChallenges", values: [string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "timeoutChallengesWithGasRefunder", values: [string, string, BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "validateExecuteTransaction", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawEth", values: [BigNumberish, string]): string;
    decodeFunctionResult(functionFragment: "allowedExecutorDestinations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransactionWithGasRefunder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransactions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeTransactionsWithGasRefunder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executors", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAllowedExecutorDestinations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExecutor", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timeoutChallenges", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timeoutChallengesWithGasRefunder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateExecuteTransaction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawEth", data: BytesLike): Result;
    events: {
        "AllowedExecutorDestinationsUpdated(address,bool)": EventFragment;
        "ExecutorUpdated(address,bool)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AllowedExecutorDestinationsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExecutorUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}
export type AllowedExecutorDestinationsUpdatedEvent = TypedEvent<[
    string,
    boolean
], {
    destination: string;
    isSet: boolean;
}>;
export type AllowedExecutorDestinationsUpdatedEventFilter = TypedEventFilter<AllowedExecutorDestinationsUpdatedEvent>;
export type ExecutorUpdatedEvent = TypedEvent<[
    string,
    boolean
], {
    executor: string;
    isExecutor: boolean;
}>;
export type ExecutorUpdatedEventFilter = TypedEventFilter<ExecutorUpdatedEvent>;
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], {
    previousOwner: string;
    newOwner: string;
}>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface ValidatorWallet extends BaseContract {
    contractName: "ValidatorWallet";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ValidatorWalletInterface;
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
        allowedExecutorDestinations(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        executeTransaction(data: BytesLike, destination: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeTransactionWithGasRefunder(gasRefunder: string, data: BytesLike, destination: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeTransactions(data: BytesLike[], destination: string[], amount: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeTransactionsWithGasRefunder(gasRefunder: string, data: BytesLike[], destination: string[], amount: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executors(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_executor: string, _owner: string, initialExecutorAllowedDests: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAllowedExecutorDestinations(destinations: string[], isSet: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setExecutor(newExecutors: string[], isExecutor: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        timeoutChallenges(manager: string, challenges: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        timeoutChallengesWithGasRefunder(gasRefunder: string, manager: string, challenges: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateExecuteTransaction(destination: string, overrides?: CallOverrides): Promise<[void]>;
        withdrawEth(amount: BigNumberish, destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    allowedExecutorDestinations(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    executeTransaction(data: BytesLike, destination: string, amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeTransactionWithGasRefunder(gasRefunder: string, data: BytesLike, destination: string, amount: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeTransactions(data: BytesLike[], destination: string[], amount: BigNumberish[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeTransactionsWithGasRefunder(gasRefunder: string, data: BytesLike[], destination: string[], amount: BigNumberish[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executors(arg0: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(_executor: string, _owner: string, initialExecutorAllowedDests: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    renounceOwnership(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAllowedExecutorDestinations(destinations: string[], isSet: boolean[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setExecutor(newExecutors: string[], isExecutor: boolean[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    timeoutChallenges(manager: string, challenges: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    timeoutChallengesWithGasRefunder(gasRefunder: string, manager: string, challenges: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateExecuteTransaction(destination: string, overrides?: CallOverrides): Promise<void>;
    withdrawEth(amount: BigNumberish, destination: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        allowedExecutorDestinations(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        executeTransaction(data: BytesLike, destination: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        executeTransactionWithGasRefunder(gasRefunder: string, data: BytesLike, destination: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        executeTransactions(data: BytesLike[], destination: string[], amount: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        executeTransactionsWithGasRefunder(gasRefunder: string, data: BytesLike[], destination: string[], amount: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        executors(arg0: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(_executor: string, _owner: string, initialExecutorAllowedDests: string[], overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setAllowedExecutorDestinations(destinations: string[], isSet: boolean[], overrides?: CallOverrides): Promise<void>;
        setExecutor(newExecutors: string[], isExecutor: boolean[], overrides?: CallOverrides): Promise<void>;
        timeoutChallenges(manager: string, challenges: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        timeoutChallengesWithGasRefunder(gasRefunder: string, manager: string, challenges: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        validateExecuteTransaction(destination: string, overrides?: CallOverrides): Promise<void>;
        withdrawEth(amount: BigNumberish, destination: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AllowedExecutorDestinationsUpdated(address,bool)"(destination?: string | null, isSet?: null): AllowedExecutorDestinationsUpdatedEventFilter;
        AllowedExecutorDestinationsUpdated(destination?: string | null, isSet?: null): AllowedExecutorDestinationsUpdatedEventFilter;
        "ExecutorUpdated(address,bool)"(executor?: string | null, isExecutor?: null): ExecutorUpdatedEventFilter;
        ExecutorUpdated(executor?: string | null, isExecutor?: null): ExecutorUpdatedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
    };
    estimateGas: {
        allowedExecutorDestinations(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        executeTransaction(data: BytesLike, destination: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeTransactionWithGasRefunder(gasRefunder: string, data: BytesLike, destination: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeTransactions(data: BytesLike[], destination: string[], amount: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeTransactionsWithGasRefunder(gasRefunder: string, data: BytesLike[], destination: string[], amount: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executors(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_executor: string, _owner: string, initialExecutorAllowedDests: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAllowedExecutorDestinations(destinations: string[], isSet: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setExecutor(newExecutors: string[], isExecutor: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        timeoutChallenges(manager: string, challenges: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        timeoutChallengesWithGasRefunder(gasRefunder: string, manager: string, challenges: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateExecuteTransaction(destination: string, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawEth(amount: BigNumberish, destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        allowedExecutorDestinations(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        executeTransaction(data: BytesLike, destination: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeTransactionWithGasRefunder(gasRefunder: string, data: BytesLike, destination: string, amount: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeTransactions(data: BytesLike[], destination: string[], amount: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeTransactionsWithGasRefunder(gasRefunder: string, data: BytesLike[], destination: string[], amount: BigNumberish[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executors(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_executor: string, _owner: string, initialExecutorAllowedDests: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAllowedExecutorDestinations(destinations: string[], isSet: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setExecutor(newExecutors: string[], isExecutor: boolean[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        timeoutChallenges(manager: string, challenges: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        timeoutChallengesWithGasRefunder(gasRefunder: string, manager: string, challenges: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateExecuteTransaction(destination: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawEth(amount: BigNumberish, destination: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
