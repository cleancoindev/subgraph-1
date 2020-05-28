// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AccruedInterestUpdated extends ethereum.Event {
  get params(): AccruedInterestUpdated__Params {
    return new AccruedInterestUpdated__Params(this);
  }
}

export class AccruedInterestUpdated__Params {
  _event: AccruedInterestUpdated;

  constructor(event: AccruedInterestUpdated) {
    this._event = event;
  }

  get lender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get totalNotWithdrawn(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get totalAccruedInterest(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class AccruedInterestWithdrawn extends ethereum.Event {
  get params(): AccruedInterestWithdrawn__Params {
    return new AccruedInterestWithdrawn__Params(this);
  }
}

export class AccruedInterestWithdrawn__Params {
  _event: AccruedInterestWithdrawn;

  constructor(event: AccruedInterestWithdrawn) {
    this._event = event;
  }

  get recipient(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class DAILenders extends ethereum.SmartContract {
  static bind(address: Address): DAILenders {
    return new DAILenders("DAILenders", address);
  }

  withdrawInterest(recipient: Address, amount: BigInt): BigInt {
    let result = super.call(
      "withdrawInterest",
      "withdrawInterest(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );

    return result[0].toBigInt();
  }

  try_withdrawInterest(
    recipient: Address,
    amount: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "withdrawInterest",
      "withdrawInterest(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(recipient),
        ethereum.Value.fromUnsignedBigInt(amount)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class WithdrawInterestCall extends ethereum.Call {
  get inputs(): WithdrawInterestCall__Inputs {
    return new WithdrawInterestCall__Inputs(this);
  }

  get outputs(): WithdrawInterestCall__Outputs {
    return new WithdrawInterestCall__Outputs(this);
  }
}

export class WithdrawInterestCall__Inputs {
  _call: WithdrawInterestCall;

  constructor(call: WithdrawInterestCall) {
    this._call = call;
  }

  get recipient(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawInterestCall__Outputs {
  _call: WithdrawInterestCall;

  constructor(call: WithdrawInterestCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SetAccruedInterestCall extends ethereum.Call {
  get inputs(): SetAccruedInterestCall__Inputs {
    return new SetAccruedInterestCall__Inputs(this);
  }

  get outputs(): SetAccruedInterestCall__Outputs {
    return new SetAccruedInterestCall__Outputs(this);
  }
}

export class SetAccruedInterestCall__Inputs {
  _call: SetAccruedInterestCall;

  constructor(call: SetAccruedInterestCall) {
    this._call = call;
  }

  get request(): SetAccruedInterestCallRequestStruct {
    return this._call.inputValues[0].value.toTuple() as SetAccruedInterestCallRequestStruct;
  }

  get responses(): Array<SetAccruedInterestCallResponsesStruct> {
    return this._call.inputValues[1].value.toTupleArray<
      SetAccruedInterestCallResponsesStruct
    >();
  }
}

export class SetAccruedInterestCall__Outputs {
  _call: SetAccruedInterestCall;

  constructor(call: SetAccruedInterestCall) {
    this._call = call;
  }
}

export class SetAccruedInterestCallRequestStruct extends ethereum.Tuple {
  get lender(): Address {
    return this[0].toAddress();
  }

  get startTime(): BigInt {
    return this[1].toBigInt();
  }

  get endTime(): BigInt {
    return this[2].toBigInt();
  }

  get requestTime(): BigInt {
    return this[3].toBigInt();
  }
}

export class SetAccruedInterestCallResponsesStruct extends ethereum.Tuple {
  get signer(): Address {
    return this[0].toAddress();
  }

  get responseTime(): BigInt {
    return this[1].toBigInt();
  }

  get interest(): BigInt {
    return this[2].toBigInt();
  }

  get signature(): SetAccruedInterestCallResponsesSignatureStruct {
    return this[3].toTuple() as SetAccruedInterestCallResponsesSignatureStruct;
  }
}

export class SetAccruedInterestCallResponsesSignatureStruct extends ethereum.Tuple {
  get signerNonce(): BigInt {
    return this[0].toBigInt();
  }

  get v(): i32 {
    return this[1].toI32();
  }

  get r(): Bytes {
    return this[2].toBytes();
  }

  get s(): Bytes {
    return this[3].toBytes();
  }
}
