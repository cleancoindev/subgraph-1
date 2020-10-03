import { BigInt } from "@graphprotocol/graph-ts"
import {
  Transfer as TransferEvent,
  Approval as ApprovalEvent,
  MinterAdded as MinterAddedEvent,
  MinterRemoved as MinterRemovedEvent,
  TToken,
} from "../../../generated/TDAIToken/TToken";
import {
  createEthTransaction,
  buildId,
  createTTokenHolderActionsChange,
  updateTTokenHolderBalancesFor,
  updateTTokenTotalSupplyFor,
} from "../../utils/commons";
import {
  ETH_TX_TTOKEN_APPROVAL,
  ETH_TX_TTOKEN_MINTER_ADDED,
  ETH_TX_TTOKEN_MINTER_REMOVED,
  TTOKEN_STATUS_TRANSFER,
  TTOKEN_STATUS_APPROVAL,
  TTOKEN_STATUS_MINTER_ADDED,
  TTOKEN_STATUS_MINTER_REMOVED,
  TTOKEN_TDAI,
  ETH_TX_TTOKEN_TRANSFER,
} from "../../utils/consts";

export function handleTransfer(event: TransferEvent): void {
  let id = buildId(event);
  let ethTransaction = createEthTransaction(event, ETH_TX_TTOKEN_TRANSFER);

  createTTokenHolderActionsChange(
    id,
    event.params.value,
    TTOKEN_TDAI,
    event.params.from,
    event.params.to,
    TTOKEN_STATUS_TRANSFER,
    ethTransaction
  )
  updateTTokenHolderBalancesFor(
    event.address,
    TTOKEN_TDAI,
    event.params.from,
    event.params.value,
    event.params.to,
    event,
    ethTransaction
  )
  updateTTokenTotalSupplyFor(
    event.address,
    event.params.from,
    event.params.to,
    event.params.value,
    ethTransaction,
  )
}

export function handleApproval(event: ApprovalEvent): void {
  let id = buildId(event);
  let ethTransaction = createEthTransaction(event, ETH_TX_TTOKEN_APPROVAL);
  createTTokenHolderActionsChange(
    id,
    event.params.value,
    TTOKEN_TDAI,
    event.params.owner,
    event.params.spender,
    TTOKEN_STATUS_APPROVAL,
    ethTransaction
  )
}

export function handleMinterAdded(event: MinterAddedEvent): void {
  let id = buildId(event);
  let ethTransaction = createEthTransaction(event, ETH_TX_TTOKEN_MINTER_ADDED);
  createTTokenHolderActionsChange(
    id,
    BigInt.fromI32(0),
    TTOKEN_TDAI,
    event.params.account,
    event.params.account,
    TTOKEN_STATUS_MINTER_ADDED,
    ethTransaction
  )
}

export function handleMinterRemoved(event: MinterRemovedEvent): void {
  let id = buildId(event);
  let ethTransaction = createEthTransaction(event, ETH_TX_TTOKEN_MINTER_REMOVED);
  createTTokenHolderActionsChange(
    id,
    BigInt.fromI32(0),
    TTOKEN_TDAI,
    event.params.account,
    event.params.account,
    TTOKEN_STATUS_MINTER_REMOVED,
    ethTransaction
  )
}
