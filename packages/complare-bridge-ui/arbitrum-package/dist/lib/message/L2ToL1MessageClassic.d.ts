import { Provider } from '@ethersproject/abstract-provider';
import { Signer } from '@ethersproject/abstract-signer';
import { BigNumber } from '@ethersproject/bignumber';
import { BlockTag } from '@ethersproject/abstract-provider';
import { L2ToL1TransactionEvent } from '../abi/ArbSys';
import { ContractTransaction, Overrides } from 'ethers';
import { SignerOrProvider } from '../dataEntities/signerOrProvider';
import { EventArgs } from '../dataEntities/event';
import { L2ToL1MessageStatus } from '../dataEntities/message';
export interface MessageBatchProofInfo {
    /**
     * Merkle proof of message inclusion in outbox entry
     */
    proof: string[];
    /**
     * Merkle path to message
     */
    path: BigNumber;
    /**
     * Sender of original message (i.e., caller of ArbSys.sendTxToL1)
     */
    l2Sender: string;
    /**
     * Destination address for L1 contract call
     */
    l1Dest: string;
    /**
     * L2 block number at which sendTxToL1 call was made
     */
    l2Block: BigNumber;
    /**
     * L1 block number at which sendTxToL1 call was made
     */
    l1Block: BigNumber;
    /**
     * L2 Timestamp at which sendTxToL1 call was made
     */
    timestamp: BigNumber;
    /**
     * Value in L1 message in wei
     */
    amount: BigNumber;
    /**
     * ABI-encoded L1 message data
     */
    calldataForL1: string;
}
/**
 * Conditional type for Signer or Provider. If T is of type Provider
 * then L2ToL1MessageReaderOrWriter<T> will be of type L2ToL1MessageReader.
 * If T is of type Signer then L2ToL1MessageReaderOrWriter<T> will be of
 * type L2ToL1MessageWriter.
 */
export type L2ToL1MessageReaderOrWriterClassic<T extends SignerOrProvider> = T extends Provider ? L2ToL1MessageReaderClassic : L2ToL1MessageWriterClassic;
export declare class L2ToL1MessageClassic {
    /**
     * The number of the batch this message is part of
     */
    readonly batchNumber: BigNumber;
    /**
     * The index of this message in the batch
     */
    readonly indexInBatch: BigNumber;
    protected constructor(batchNumber: BigNumber, indexInBatch: BigNumber);
    /**
     * Instantiates a new `L2ToL1MessageWriterClassic` or `L2ToL1MessageReaderClassic` object.
     *
     * @param {SignerOrProvider} l1SignerOrProvider Signer or provider to be used for executing or reading the L2-to-L1 message.
     * @param {BigNumber} batchNumber The number of the batch containing the L2-to-L1 message.
     * @param {BigNumber} indexInBatch The index of the L2-to-L1 message within the batch.
     * @param {Provider} [l1Provider] Optional. Used to override the Provider which is attached to `l1SignerOrProvider` in case you need more control. This will be a required parameter in a future major version update.
     */
    static fromBatchNumber<T extends SignerOrProvider>(l1SignerOrProvider: T, batchNumber: BigNumber, indexInBatch: BigNumber, l1Provider?: Provider): L2ToL1MessageReaderOrWriterClassic<T>;
    static getL2ToL1Events(l2Provider: Provider, filter: {
        fromBlock: BlockTag;
        toBlock: BlockTag;
    }, batchNumber?: BigNumber, destination?: string, uniqueId?: BigNumber, indexInBatch?: BigNumber): Promise<(EventArgs<L2ToL1TransactionEvent> & {
        transactionHash: string;
    })[]>;
}
/**
 * Provides read-only access for classic l2-to-l1-messages
 */
export declare class L2ToL1MessageReaderClassic extends L2ToL1MessageClassic {
    protected readonly l1Provider: Provider;
    constructor(l1Provider: Provider, batchNumber: BigNumber, indexInBatch: BigNumber);
    /**
     * Contains the classic outbox address, or set to zero address if this network
     * did not have a classic outbox deployed
     */
    protected outboxAddress: string | null;
    /**
     * Classic had 2 outboxes, we need to find the correct one for the provided batch number
     * @param l2Provider
     * @param batchNumber
     * @returns
     */
    protected getOutboxAddress(l2Provider: Provider, batchNumber: number): Promise<string>;
    private outboxEntryExists;
    static tryGetProof(l2Provider: Provider, batchNumber: BigNumber, indexInBatch: BigNumber): Promise<MessageBatchProofInfo | null>;
    private proof;
    /**
     * Get the execution proof for this message. Returns null if the batch does not exist yet.
     * @param l2Provider
     * @returns
     */
    tryGetProof(l2Provider: Provider): Promise<MessageBatchProofInfo | null>;
    /**
     * Check if given outbox message has already been executed
     */
    hasExecuted(l2Provider: Provider): Promise<boolean>;
    /**
     * Get the status of this message
     * In order to check if the message has been executed proof info must be provided.
     * @param proofInfo
     * @returns
     */
    status(l2Provider: Provider): Promise<L2ToL1MessageStatus>;
    /**
     * Waits until the outbox entry has been created, and will not return until it has been.
     * WARNING: Outbox entries are only created when the corresponding node is confirmed. Which
     * can take 1 week+, so waiting here could be a very long operation.
     * @param retryDelay
     * @returns outbox entry status (either executed or confirmed but not pending)
     */
    waitUntilOutboxEntryCreated(l2Provider: Provider, retryDelay?: number): Promise<L2ToL1MessageStatus.EXECUTED | L2ToL1MessageStatus.CONFIRMED>;
    /**
     * Estimates the L1 block number in which this L2 to L1 tx will be available for execution
     * @param l2Provider
     * @returns Always returns null for classic l2toL1 messages since they can be executed in any block now.
     */
    getFirstExecutableBlock(l2Provider: Provider): Promise<BigNumber | null>;
}
/**
 * Provides read and write access for classic l2-to-l1-messages
 */
export declare class L2ToL1MessageWriterClassic extends L2ToL1MessageReaderClassic {
    private readonly l1Signer;
    /**
     * Instantiates a new `L2ToL1MessageWriterClassic` object.
     *
     * @param {Signer} l1Signer The signer to be used for executing the L2-to-L1 message.
     * @param {BigNumber} batchNumber The number of the batch containing the L2-to-L1 message.
     * @param {BigNumber} indexInBatch The index of the L2-to-L1 message within the batch.
     * @param {Provider} [l1Provider] Optional. Used to override the Provider which is attached to `l1Signer` in case you need more control. This will be a required parameter in a future major version update.
     */
    constructor(l1Signer: Signer, batchNumber: BigNumber, indexInBatch: BigNumber, l1Provider?: Provider);
    /**
     * Executes the L2ToL1Message on L1.
     * Will throw an error if the outbox entry has not been created, which happens when the
     * corresponding assertion is confirmed.
     * @returns
     */
    execute(l2Provider: Provider, overrides?: Overrides): Promise<ContractTransaction>;
}
