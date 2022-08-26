import get from 'lodash/get';
import omit from 'lodash/omit';
import { assert, object, string, Describe } from 'superstruct';
import { TezosAddress, IsoDateString, PositiveInteger, PgBigInt, ContractAddress } from '../../../lib/validators';
import { Handler, TokenEvent, Transaction } from '../../../types';
import { findDiff, transactionMatchesPattern, createEventId } from '../../../lib/utils';
import { OBJKT_CONTRACT_ENGLISH_AUCTION_V2 } from '../../../consts';

export const EVENT_TYPE_OBJKT_BID_ENGLISH_AUCTION_V2 = 'OBJKT_BID_ENGLISH_AUCTION_V2';

const CONTRACT_TO_BIGMAP: Record<string, number> = {
  [EVENT_TYPE_OBJKT_BID_ENGLISH_AUCTION_V2]: 103262,
};

export interface ObjktBidEnglishAuctionV2Event extends TokenEvent {
  type: typeof EVENT_TYPE_OBJKT_BID_ENGLISH_AUCTION_V2;
  seller_address: string;
  bidder_address: string;
  start_time: string;
  end_time: string;
  current_price: string;
  extension_time: string;
  price_increment: string;
  highest_bidder_address: string;
  auction_id: string;
  bid: string;
}

const ObjktBidEnglishAuctionV2EventSchema: Describe<Omit<ObjktBidEnglishAuctionV2Event, 'type'>> = object({
  id: string(),
  opid: PositiveInteger,
  timestamp: IsoDateString,
  level: PositiveInteger,
  fa2_address: ContractAddress,
  token_id: string(),
  ophash: string(),
  seller_address: TezosAddress,
  bidder_address: TezosAddress,
  start_time: IsoDateString,
  end_time: IsoDateString,
  current_price: PgBigInt,
  extension_time: PgBigInt,
  highest_bidder_address: TezosAddress,
  price_increment: PgBigInt,
  auction_id: PgBigInt,
  bid: PgBigInt,
});

const ObjktBidEnglishAuctionHandler: Handler<Transaction, ObjktBidEnglishAuctionV2Event> = {
  type: EVENT_TYPE_OBJKT_BID_ENGLISH_AUCTION_V2,

  accept: (transaction) => {
    return (
      transactionMatchesPattern(transaction, {
        entrypoint: 'bid',
        target_address: OBJKT_CONTRACT_ENGLISH_AUCTION_V2,
      })
    );
  },

  exec: (transaction) => {
    const auctionId = get(transaction, 'parameter.value');
    const contractAddress = get(transaction, 'target.address');
    const bidderAddress = get(transaction, 'sender.address');
    const bid = String(get(transaction, 'amount'));
    const diff = findDiff(transaction.diffs!, CONTRACT_TO_BIGMAP[contractAddress], 'auctions', ['update_key'], auctionId);
    const sellerAddress = get(diff, 'content.value.creator');
    const fa2Address = get(diff, 'content.value.token.address');
    const tokenId = get(diff, 'content.value.token.token_id');
    const startTime = get(diff, 'content.value.start_time');
    const endTime = get(diff, 'content.value.end_time');
    const extensionTime = get(diff, 'content.value.extension_time');
    // const shares = get(diff, 'content.value.shares'); // => {amount: string (num), recipient: string (tz)}[]
    const priceIncrement = get(diff, 'content.value.price_increment');
    const highestBidderAddress = get(diff, 'content.value.highest_bidder');
    const currentPrice = get(diff, 'content.value.current_price');
    const id = createEventId(EVENT_TYPE_OBJKT_BID_ENGLISH_AUCTION_V2, transaction);

    const event: ObjktBidEnglishAuctionV2Event = {
      id,
      type: EVENT_TYPE_OBJKT_BID_ENGLISH_AUCTION_V2,
      opid: transaction.id,
      ophash: transaction.hash,
      timestamp: transaction.timestamp,
      level: transaction.level,
      fa2_address: fa2Address,
      token_id: tokenId,
      bidder_address: bidderAddress,
      seller_address: sellerAddress,
      start_time: startTime,
      end_time: endTime,
      extension_time: extensionTime,
      price_increment: priceIncrement,
      auction_id: auctionId,
      highest_bidder_address: highestBidderAddress,
      current_price: currentPrice,
      bid,
    };

    assert(omit(event, ['type']), ObjktBidEnglishAuctionV2EventSchema);

    return event;
  },
};

export default ObjktBidEnglishAuctionHandler;
