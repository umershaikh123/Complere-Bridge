import { Signer } from '@ethersproject/abstract-signer';
import { Provider, BlockTag, TransactionRequest } from '@ethersproject/abstract-provider';
import { PayableOverrides, Overrides } from '@ethersproject/contracts';
import { BigNumber, ethers } from 'ethers';
import { ERC20 } from '../abi/ERC20';
import { L2GatewayToken } from '../abi/L2GatewayToken';
import { WithdrawalInitiatedEvent } from '../abi/L2ArbitrumGateway';
import { GatewaySetEvent } from '../abi/L1GatewayRouter';
import { GasOverrides } from '../message/L1ToL2MessageGasEstimator';
import { L2Network } from '../dataEntities/networks';
import { EthDepositParams, EthWithdrawParams } from './ethBridger';
import { AssetBridger } from './assetBridger';
import { L1ContractCallTransaction, L1ContractTransaction } from '../message/L1Transaction';
import { L2ContractTransaction } from '../message/L2Transaction';
import { L1ToL2TransactionRequest, L2ToL1TransactionRequest } from '../dataEntities/transactionRequest';
import { OmitTyped } from '../utils/types';
import { EventArgs } from '../dataEntities/event';
export interface TokenApproveParams {
    /**
     * L1 address of the ERC20 token contract
     */
    erc20L1Address: string;
    /**
     * Amount to approve. Defaults to max int.
     */
    amount?: BigNumber;
    /**
     * Transaction overrides
     */
    overrides?: PayableOverrides;
}
export interface Erc20DepositParams extends EthDepositParams {
    /**
     * An L2 provider
     */
    l2Provider: Provider;
    /**
     * L1 address of the token ERC20 contract
     */
    erc20L1Address: string;
    /**
     * L2 address of the entity receiving the funds. Defaults to the l1FromAddress
     */
    destinationAddress?: string;
    /**
     * The maximum cost to be paid for submitting the transaction
     */
    maxSubmissionCost?: BigNumber;
    /**
     * The address to return the any gas that was not spent on fees
     */
    excessFeeRefundAddress?: string;
    /**
     * The address to refund the call value to in the event the retryable is cancelled, or expires
     */
    callValueRefundAddress?: string;
    /**
     * Overrides for the retryable ticket parameters
     */
    retryableGasOverrides?: GasOverrides;
    /**
     * Transaction overrides
     */
    overrides?: Overrides;
}
export interface Erc20WithdrawParams extends EthWithdrawParams {
    /**
     * L1 address of the token ERC20 contract
     */
    erc20l1Address: string;
}
export type L1ToL2TxReqAndSignerProvider = L1ToL2TransactionRequest & {
    l1Signer: Signer;
    overrides?: Overrides;
};
export type L2ToL1TxReqAndSigner = L2ToL1TransactionRequest & {
    l2Signer: Signer;
    overrides?: Overrides;
};
type SignerTokenApproveParams = TokenApproveParams & {
    l1Signer: Signer;
};
type ProviderTokenApproveParams = TokenApproveParams & {
    l1Provider: Provider;
};
export type ApproveParamsOrTxRequest = SignerTokenApproveParams | {
    txRequest: Required<Pick<TransactionRequest, 'to' | 'data' | 'value'>>;
    l1Signer: Signer;
    overrides?: Overrides;
};
/**
 * The deposit request takes the same args as the actual deposit. Except we dont require a signer object
 * only a provider
 */
type DepositRequest = OmitTyped<Erc20DepositParams, 'overrides' | 'l1Signer'> & {
    l1Provider: Provider;
    /**
     * Address that is depositing the assets
     */
    from: string;
};
/**
 * Bridger for moving ERC20 tokens back and forth between L1 to L2
 */
export declare class Erc20Bridger extends AssetBridger<Erc20DepositParams | L1ToL2TxReqAndSignerProvider, OmitTyped<Erc20WithdrawParams, 'from'> | L2ToL1TransactionRequest> {
    static MAX_APPROVAL: BigNumber;
    static MIN_CUSTOM_DEPOSIT_GAS_LIMIT: BigNumber;
    /**
     * Bridger for moving ERC20 tokens back and forth between L1 to L2
     */
    constructor(l2Network: L2Network);
    /**
     * Instantiates a new Erc20Bridger from an L2 Provider
     * @param l2Provider
     * @returns
     */
    static fromProvider(l2Provider: Provider): Promise<Erc20Bridger>;
    /**
     * Get the address of the l1 gateway for this token
     * @param erc20L1Address
     * @param l1Provider
     * @returns
     */
    getL1GatewayAddress(erc20L1Address: string, l1Provider: Provider): Promise<string>;
    /**
     * Get the address of the l2 gateway for this token
     * @param erc20L1Address
     * @param l2Provider
     * @returns
     */
    getL2GatewayAddress(erc20L1Address: string, l2Provider: Provider): Promise<string>;
    /**
     * Creates a transaction request for approving the custom gas token to be spent by the relevant gateway on the parent chain
     * @param params
     */
    getApproveGasTokenRequest(params: ProviderTokenApproveParams): Promise<Required<Pick<TransactionRequest, 'to' | 'data' | 'value'>>>;
    /**
     * Approves the custom gas token to be spent by the relevant gateway on the parent chain
     * @param params
     */
    approveGasToken(params: ApproveParamsOrTxRequest): Promise<ethers.ContractTransaction>;
    /**
     * Get a tx request to approve tokens for deposit to the bridge.
     * The tokens will be approved for the relevant gateway.
     * @param params
     * @returns
     */
    getApproveTokenRequest(params: ProviderTokenApproveParams): Promise<Required<Pick<TransactionRequest, 'to' | 'data' | 'value'>>>;
    private isApproveParams;
    /**
     * Approve tokens for deposit to the bridge. The tokens will be approved for the relevant gateway.
     * @param params
     * @returns
     */
    approveToken(params: ApproveParamsOrTxRequest): Promise<ethers.ContractTransaction>;
    /**
     * Get the L2 events created by a withdrawal
     * @param l2Provider
     * @param gatewayAddress
     * @param l1TokenAddress
     * @param fromAddress
     * @param filter
     * @returns
     */
    getL2WithdrawalEvents(l2Provider: Provider, gatewayAddress: string, filter: {
        fromBlock: BlockTag;
        toBlock: BlockTag;
    }, l1TokenAddress?: string, fromAddress?: string, toAddress?: string): Promise<(EventArgs<WithdrawalInitiatedEvent> & {
        txHash: string;
    })[]>;
    /**
     * Does the provided address look like a weth gateway
     * @param potentialWethGatewayAddress
     * @param l1Provider
     * @returns
     */
    private looksLikeWethGateway;
    /**
     * Is this a known or unknown WETH gateway
     * @param gatewayAddress
     * @param l1Provider
     * @returns
     */
    private isWethGateway;
    /**
     * Get the L2 token contract at the provided address
     * Note: This function just returns a typed ethers object for the provided address, it doesnt
     * check the underlying form of the contract bytecode to see if it's an erc20, and doesn't ensure the validity
     * of any of the underlying functions on that contract.
     * @param l2Provider
     * @param l2TokenAddr
     * @returns
     */
    getL2TokenContract(l2Provider: Provider, l2TokenAddr: string): L2GatewayToken;
    /**
     * Get the L1 token contract at the provided address
     * Note: This function just returns a typed ethers object for the provided address, it doesnt
     * check the underlying form of the contract bytecode to see if it's an erc20, and doesn't ensure the validity
     * of any of the underlying functions on that contract.
     * @param l1Provider
     * @param l1TokenAddr
     * @returns
     */
    getL1TokenContract(l1Provider: Provider, l1TokenAddr: string): ERC20;
    /**
     * Get the corresponding L2 for the provided L1 token
     * @param erc20L1Address
     * @param l1Provider
     * @returns
     */
    getL2ERC20Address(erc20L1Address: string, l1Provider: Provider): Promise<string>;
    /**
     * Get the corresponding L1 for the provided L2 token
     * Validates the returned address against the l2 router to ensure it is correctly mapped to the provided erc20L2Address
     * @param erc20L2Address
     * @param l2Provider
     * @returns
     */
    getL1ERC20Address(erc20L2Address: string, l2Provider: Provider): Promise<string>;
    /**
     * Whether the token has been disabled on the router
     * @param l1TokenAddress
     * @param l1Provider
     * @returns
     */
    l1TokenIsDisabled(l1TokenAddress: string, l1Provider: Provider): Promise<boolean>;
    private applyDefaults;
    /**
     * Get the call value for the deposit transaction request
     * @param depositParams
     * @returns
     */
    private getDepositRequestCallValue;
    /**
     * Get the `data` param for call to `outboundTransfer`
     * @param depositParams
     * @returns
     */
    private getDepositRequestOutboundTransferInnerData;
    /**
     * Get the arguments for calling the deposit function
     * @param params
     * @returns
     */
    getDepositRequest(params: DepositRequest): Promise<L1ToL2TransactionRequest>;
    /**
     * Execute a token deposit from L1 to L2
     * @param params
     * @returns
     */
    deposit(params: Erc20DepositParams | L1ToL2TxReqAndSignerProvider): Promise<L1ContractCallTransaction>;
    /**
     * Get the arguments for calling the token withdrawal function
     * @param params
     * @returns
     */
    getWithdrawalRequest(params: Erc20WithdrawParams): Promise<L2ToL1TransactionRequest>;
    /**
     * Withdraw tokens from L2 to L1
     * @param params
     * @returns
     */
    withdraw(params: (OmitTyped<Erc20WithdrawParams, 'from'> & {
        l2Signer: Signer;
    }) | L2ToL1TxReqAndSigner): Promise<L2ContractTransaction>;
}
/**
 * A token and gateway pair
 */
interface TokenAndGateway {
    tokenAddr: string;
    gatewayAddr: string;
}
/**
 * Admin functionality for the token bridge
 */
export declare class AdminErc20Bridger extends Erc20Bridger {
    /**
     * Register a custom token on the Arbitrum bridge
     * See https://developer.offchainlabs.com/docs/bridging_assets#the-arbitrum-generic-custom-gateway for more details
     * @param l1TokenAddress Address of the already deployed l1 token. Must inherit from https://developer.offchainlabs.com/docs/sol_contract_docs/md_docs/arb-bridge-peripherals/tokenbridge/ethereum/icustomtoken.
     * @param l2TokenAddress Address of the already deployed l2 token. Must inherit from https://developer.offchainlabs.com/docs/sol_contract_docs/md_docs/arb-bridge-peripherals/tokenbridge/arbitrum/iarbtoken.
     * @param l1Signer The signer with the rights to call registerTokenOnL2 on the l1 token
     * @param l2Provider Arbitrum rpc provider
     * @returns
     */
    registerCustomToken(l1TokenAddress: string, l2TokenAddress: string, l1Signer: Signer, l2Provider: Provider): Promise<L1ContractTransaction>;
    /**
     * Get all the gateway set events on the L1 gateway router
     * @param l1Provider
     * @param customNetworkL1GatewayRouter
     * @returns
     */
    getL1GatewaySetEvents(l1Provider: Provider, filter: {
        fromBlock: BlockTag;
        toBlock: BlockTag;
    }): Promise<EventArgs<GatewaySetEvent>[]>;
    /**
     * Get all the gateway set events on the L2 gateway router
     * @param l1Provider
     * @param customNetworkL1GatewayRouter
     * @returns
     */
    getL2GatewaySetEvents(l2Provider: Provider, filter: {
        fromBlock: BlockTag;
        toBlock: BlockTag;
    }, customNetworkL2GatewayRouter?: string): Promise<EventArgs<GatewaySetEvent>[]>;
    /**
     * Register the provided token addresses against the provided gateways
     * @param l1Signer
     * @param l2Provider
     * @param tokenGateways
     * @returns
     */
    setGateways(l1Signer: Signer, l2Provider: Provider, tokenGateways: TokenAndGateway[], options?: GasOverrides): Promise<L1ContractCallTransaction>;
}
export {};
