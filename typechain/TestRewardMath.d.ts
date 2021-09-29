/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TestRewardMathInterface extends ethers.utils.Interface {
  functions: {
    "computeRewardAmount(uint256,uint160,uint256,uint256,uint128,uint160,uint160,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "computeRewardAmount",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeRewardAmount",
    data: BytesLike
  ): Result;

  events: {};
}

export class TestRewardMath extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TestRewardMathInterface;

  functions: {
    computeRewardAmount(
      totalRewardUnclaimed: BigNumberish,
      totalSecondsClaimedX128: BigNumberish,
      startTime: BigNumberish,
      endTime: BigNumberish,
      liquidity: BigNumberish,
      secondsPerLiquidityInsideInitialX128: BigNumberish,
      secondsPerLiquidityInsideX128: BigNumberish,
      currentTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        reward: BigNumber;
        secondsInsideX128: BigNumber;
      }
    >;
  };

  computeRewardAmount(
    totalRewardUnclaimed: BigNumberish,
    totalSecondsClaimedX128: BigNumberish,
    startTime: BigNumberish,
    endTime: BigNumberish,
    liquidity: BigNumberish,
    secondsPerLiquidityInsideInitialX128: BigNumberish,
    secondsPerLiquidityInsideX128: BigNumberish,
    currentTime: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { reward: BigNumber; secondsInsideX128: BigNumber }
  >;

  callStatic: {
    computeRewardAmount(
      totalRewardUnclaimed: BigNumberish,
      totalSecondsClaimedX128: BigNumberish,
      startTime: BigNumberish,
      endTime: BigNumberish,
      liquidity: BigNumberish,
      secondsPerLiquidityInsideInitialX128: BigNumberish,
      secondsPerLiquidityInsideX128: BigNumberish,
      currentTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        reward: BigNumber;
        secondsInsideX128: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    computeRewardAmount(
      totalRewardUnclaimed: BigNumberish,
      totalSecondsClaimedX128: BigNumberish,
      startTime: BigNumberish,
      endTime: BigNumberish,
      liquidity: BigNumberish,
      secondsPerLiquidityInsideInitialX128: BigNumberish,
      secondsPerLiquidityInsideX128: BigNumberish,
      currentTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    computeRewardAmount(
      totalRewardUnclaimed: BigNumberish,
      totalSecondsClaimedX128: BigNumberish,
      startTime: BigNumberish,
      endTime: BigNumberish,
      liquidity: BigNumberish,
      secondsPerLiquidityInsideInitialX128: BigNumberish,
      secondsPerLiquidityInsideX128: BigNumberish,
      currentTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
