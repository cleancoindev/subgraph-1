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

export class PairAggregatorRegistered extends ethereum.Event {
  get params(): PairAggregatorRegistered__Params {
    return new PairAggregatorRegistered__Params(this);
  }
}

export class PairAggregatorRegistered__Params {
  _event: PairAggregatorRegistered;

  constructor(event: PairAggregatorRegistered) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get quoteToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get pairAggregator(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get responseDecimals(): i32 {
    return this._event.parameters[4].value.toI32();
  }

  get collateralDecimals(): i32 {
    return this._event.parameters[5].value.toI32();
  }

  get inverse(): boolean {
    return this._event.parameters[6].value.toBoolean();
  }
}

export class PairAggregatorUpdated extends ethereum.Event {
  get params(): PairAggregatorUpdated__Params {
    return new PairAggregatorUpdated__Params(this);
  }
}

export class PairAggregatorUpdated__Params {
  _event: PairAggregatorUpdated;

  constructor(event: PairAggregatorUpdated) {
    this._event = event;
  }

  get sender(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get baseToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get quoteToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get oldPairAggregator(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get newPairAggregator(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get newResponseDecimals(): i32 {
    return this._event.parameters[5].value.toI32();
  }

  get newCollateralDecimals(): i32 {
    return this._event.parameters[6].value.toI32();
  }

  get newInverse(): boolean {
    return this._event.parameters[7].value.toBoolean();
  }
}

export class ChainlinkPairAggregatorRegistry__registerPairAggregatorInputRequestStruct extends ethereum.Tuple {
  get baseToken(): Address {
    return this[0].toAddress();
  }

  get quoteToken(): Address {
    return this[1].toAddress();
  }

  get chainlinkAggregatorAddress(): Address {
    return this[2].toAddress();
  }

  get inverse(): boolean {
    return this[3].toBoolean();
  }

  get responseDecimals(): i32 {
    return this[4].toI32();
  }

  get collateralDecimals(): i32 {
    return this[5].toI32();
  }
}

export class ChainlinkPairAggregatorRegistry__registerPairAggregatorsInputRequestsStruct extends ethereum.Tuple {
  get baseToken(): Address {
    return this[0].toAddress();
  }

  get quoteToken(): Address {
    return this[1].toAddress();
  }

  get chainlinkAggregatorAddress(): Address {
    return this[2].toAddress();
  }

  get inverse(): boolean {
    return this[3].toBoolean();
  }

  get responseDecimals(): i32 {
    return this[4].toI32();
  }

  get collateralDecimals(): i32 {
    return this[5].toI32();
  }
}

export class ChainlinkPairAggregatorRegistry__updatePairAggregatorInputRequestStruct extends ethereum.Tuple {
  get baseToken(): Address {
    return this[0].toAddress();
  }

  get quoteToken(): Address {
    return this[1].toAddress();
  }

  get chainlinkAggregatorAddress(): Address {
    return this[2].toAddress();
  }

  get inverse(): boolean {
    return this[3].toBoolean();
  }

  get responseDecimals(): i32 {
    return this[4].toI32();
  }

  get collateralDecimals(): i32 {
    return this[5].toI32();
  }
}

export class ChainlinkPairAggregatorRegistry extends ethereum.SmartContract {
  static bind(address: Address): ChainlinkPairAggregatorRegistry {
    return new ChainlinkPairAggregatorRegistry(
      "ChainlinkPairAggregatorRegistry",
      address
    );
  }

  registerPairAggregator(
    request: ChainlinkPairAggregatorRegistry__registerPairAggregatorInputRequestStruct
  ): Address {
    let result = super.call(
      "registerPairAggregator",
      "registerPairAggregator((address,address,address,bool,uint8,uint8)):(address)",
      [ethereum.Value.fromTuple(request)]
    );

    return result[0].toAddress();
  }

  try_registerPairAggregator(
    request: ChainlinkPairAggregatorRegistry__registerPairAggregatorInputRequestStruct
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "registerPairAggregator",
      "registerPairAggregator((address,address,address,bool,uint8,uint8)):(address)",
      [ethereum.Value.fromTuple(request)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  registerPairAggregators(
    requests: Array<
      ChainlinkPairAggregatorRegistry__registerPairAggregatorsInputRequestsStruct
    >
  ): Array<Address> {
    let result = super.call(
      "registerPairAggregators",
      "registerPairAggregators(tuple[]):(address[])",
      [ethereum.Value.fromTupleArray(requests)]
    );

    return result[0].toAddressArray();
  }

  try_registerPairAggregators(
    requests: Array<
      ChainlinkPairAggregatorRegistry__registerPairAggregatorsInputRequestsStruct
    >
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "registerPairAggregators",
      "registerPairAggregators(tuple[]):(address[])",
      [ethereum.Value.fromTupleArray(requests)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  updatePairAggregator(
    request: ChainlinkPairAggregatorRegistry__updatePairAggregatorInputRequestStruct
  ): Address {
    let result = super.call(
      "updatePairAggregator",
      "updatePairAggregator((address,address,address,bool,uint8,uint8)):(address)",
      [ethereum.Value.fromTuple(request)]
    );

    return result[0].toAddress();
  }

  try_updatePairAggregator(
    request: ChainlinkPairAggregatorRegistry__updatePairAggregatorInputRequestStruct
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "updatePairAggregator",
      "updatePairAggregator((address,address,address,bool,uint8,uint8)):(address)",
      [ethereum.Value.fromTuple(request)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getPairAggregator(baseToken: Address, quoteToken: Address): Address {
    let result = super.call(
      "getPairAggregator",
      "getPairAggregator(address,address):(address)",
      [
        ethereum.Value.fromAddress(baseToken),
        ethereum.Value.fromAddress(quoteToken)
      ]
    );

    return result[0].toAddress();
  }

  try_getPairAggregator(
    baseToken: Address,
    quoteToken: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getPairAggregator",
      "getPairAggregator(address,address):(address)",
      [
        ethereum.Value.fromAddress(baseToken),
        ethereum.Value.fromAddress(quoteToken)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  hasPairAggregator(baseToken: Address, quoteToken: Address): boolean {
    let result = super.call(
      "hasPairAggregator",
      "hasPairAggregator(address,address):(bool)",
      [
        ethereum.Value.fromAddress(baseToken),
        ethereum.Value.fromAddress(quoteToken)
      ]
    );

    return result[0].toBoolean();
  }

  try_hasPairAggregator(
    baseToken: Address,
    quoteToken: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasPairAggregator",
      "hasPairAggregator(address,address):(bool)",
      [
        ethereum.Value.fromAddress(baseToken),
        ethereum.Value.fromAddress(quoteToken)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class RegisterPairAggregatorCall extends ethereum.Call {
  get inputs(): RegisterPairAggregatorCall__Inputs {
    return new RegisterPairAggregatorCall__Inputs(this);
  }

  get outputs(): RegisterPairAggregatorCall__Outputs {
    return new RegisterPairAggregatorCall__Outputs(this);
  }
}

export class RegisterPairAggregatorCall__Inputs {
  _call: RegisterPairAggregatorCall;

  constructor(call: RegisterPairAggregatorCall) {
    this._call = call;
  }

  get request(): RegisterPairAggregatorCallRequestStruct {
    return this._call.inputValues[0].value.toTuple() as RegisterPairAggregatorCallRequestStruct;
  }
}

export class RegisterPairAggregatorCall__Outputs {
  _call: RegisterPairAggregatorCall;

  constructor(call: RegisterPairAggregatorCall) {
    this._call = call;
  }

  get aggregator(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class RegisterPairAggregatorCallRequestStruct extends ethereum.Tuple {
  get baseToken(): Address {
    return this[0].toAddress();
  }

  get quoteToken(): Address {
    return this[1].toAddress();
  }

  get chainlinkAggregatorAddress(): Address {
    return this[2].toAddress();
  }

  get inverse(): boolean {
    return this[3].toBoolean();
  }

  get responseDecimals(): i32 {
    return this[4].toI32();
  }

  get collateralDecimals(): i32 {
    return this[5].toI32();
  }
}

export class RegisterPairAggregatorsCall extends ethereum.Call {
  get inputs(): RegisterPairAggregatorsCall__Inputs {
    return new RegisterPairAggregatorsCall__Inputs(this);
  }

  get outputs(): RegisterPairAggregatorsCall__Outputs {
    return new RegisterPairAggregatorsCall__Outputs(this);
  }
}

export class RegisterPairAggregatorsCall__Inputs {
  _call: RegisterPairAggregatorsCall;

  constructor(call: RegisterPairAggregatorsCall) {
    this._call = call;
  }

  get requests(): Array<RegisterPairAggregatorsCallRequestsStruct> {
    return this._call.inputValues[0].value.toTupleArray<
      RegisterPairAggregatorsCallRequestsStruct
    >();
  }
}

export class RegisterPairAggregatorsCall__Outputs {
  _call: RegisterPairAggregatorsCall;

  constructor(call: RegisterPairAggregatorsCall) {
    this._call = call;
  }

  get newAggregators(): Array<Address> {
    return this._call.outputValues[0].value.toAddressArray();
  }
}

export class RegisterPairAggregatorsCallRequestsStruct extends ethereum.Tuple {
  get baseToken(): Address {
    return this[0].toAddress();
  }

  get quoteToken(): Address {
    return this[1].toAddress();
  }

  get chainlinkAggregatorAddress(): Address {
    return this[2].toAddress();
  }

  get inverse(): boolean {
    return this[3].toBoolean();
  }

  get responseDecimals(): i32 {
    return this[4].toI32();
  }

  get collateralDecimals(): i32 {
    return this[5].toI32();
  }
}

export class UpdatePairAggregatorCall extends ethereum.Call {
  get inputs(): UpdatePairAggregatorCall__Inputs {
    return new UpdatePairAggregatorCall__Inputs(this);
  }

  get outputs(): UpdatePairAggregatorCall__Outputs {
    return new UpdatePairAggregatorCall__Outputs(this);
  }
}

export class UpdatePairAggregatorCall__Inputs {
  _call: UpdatePairAggregatorCall;

  constructor(call: UpdatePairAggregatorCall) {
    this._call = call;
  }

  get request(): UpdatePairAggregatorCallRequestStruct {
    return this._call.inputValues[0].value.toTuple() as UpdatePairAggregatorCallRequestStruct;
  }
}

export class UpdatePairAggregatorCall__Outputs {
  _call: UpdatePairAggregatorCall;

  constructor(call: UpdatePairAggregatorCall) {
    this._call = call;
  }

  get aggregator(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class UpdatePairAggregatorCallRequestStruct extends ethereum.Tuple {
  get baseToken(): Address {
    return this[0].toAddress();
  }

  get quoteToken(): Address {
    return this[1].toAddress();
  }

  get chainlinkAggregatorAddress(): Address {
    return this[2].toAddress();
  }

  get inverse(): boolean {
    return this[3].toBoolean();
  }

  get responseDecimals(): i32 {
    return this[4].toI32();
  }

  get collateralDecimals(): i32 {
    return this[5].toI32();
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get settingsAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}
