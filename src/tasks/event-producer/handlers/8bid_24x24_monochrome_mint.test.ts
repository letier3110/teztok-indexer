import EightbidMint24x24MonochromeHandler from './8bid_24x24_monochrome_mint';
import { transactionsToEvents } from '../event-producer';
import { Transactions } from '../../../types';

test('creates 8BID_24X24_MONOCHROME_MINT events', async () => {
  const transactions: Transactions = [
    {
      id: 185960332,
      level: 2190708,
      timestamp: '2022-03-12T17:17:54Z',
      block: 'BLYxDTm2E3v988Dahy4GyYQChSDJ3i4nc7zptrwHJFh955Li4kj',
      hash: 'ooE6bwEzFDKv7p1AuaJSVkZHNcTEtmRgRTP9kCTq2jzfaNLN1ig',
      counter: 14230173,
      sender: {
        alias: 'HrtkAssh',
        address: 'tz1c6Uibt7Vjr7MEFEQpohEa2f311KxZyJoZ',
      },
      target: {
        address: 'KT1TR1ErEQPTdtaJ7hbvKTJSa1tsGnHGZTpf',
      },
      parameter: {
        entrypoint: 'mint',
        value: {
          rgb: {
            rgb: '396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396266666666396266663962396239623962396239623962396239623962396239623962396239623962396239626666666666666666666666666666396239623962396239623962396239623962396239623962396239623962396239626666666666663962666666666666666639623962396239623962396239623962396239623962396239623962396266666666666639623962666666666666666666663962396239623962396239623962396239623962396239623962396239626666396239623962396266666666666666663962396239623962396239623962396239623962396239623962396266663962396239623962396239623962666666663962396239623962396239623962396239623962396239623962396239623962303039623962396230303962396239623962396239623962396239623962396239623962396239623962396239623962396239623030396239623962396266663962396239623962396239623962396239623962396239623962396239623962396239623030396239623962666666663962396239623962396239623962396239623962396239623962396239623962396239623962396239623962666639623962396239623962396239623962396239623962396239623962396239623962396230303030303039623962666639623962396239623962396239623962396239623962396239623962396239626666396239626666396239626666666639623962396239623962396239623962396239623962396239623962396239623962666666666666666639626666396239623962396239623962396239623962396239623962396239623962396239626337396266666666396239623962396265353962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239626535396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623030396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623030396239623962396239623962653539623962396239623962396239623962396239623962633739623962396239623962396239623962396239623962653539623962396239623962396239623962396239623962396239623962396239623030396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962633739623962396239623030396239623962396239623962653539623962396239623962',
            creator: 'tz1c6Uibt7Vjr7MEFEQpohEa2f311KxZyJoZ',
            token_id: '0',
            token_name: '546f20206265',
            creator_name: '6872746b',
            token_description: '4f62736572766174696f6e20616e64204578697374656e6365',
          },
          mint_tx: {
            owner: 'tz1c6Uibt7Vjr7MEFEQpohEa2f311KxZyJoZ',
            amount: '24',
            token_id: '0',
          },
          token_meta: {
            token_id: '0',
            token_info: {
              '': '687474703a2f2f6c6f63616c686f73743a393939392f',
            },
          },
        },
      },
      amount: 0,
      status: 'applied',
      hasInternals: false,
      initiator: null,
      storage: {
        rgb: 128186,
        ledger: 128181,
        metadata: 128185,
        operators: 128182,
        token_index: '2',
        token_metadata: 128184,
        token_total_supply: 128183,
      },
      diffs: [
        {
          bigmap: 128186,
          path: 'rgb',
          action: 'add_key',
          content: {
            hash: 'expruDuAZnFKqmLoisJqUGqrNzXTvw7PJM2rYk97JErM5FHCerQqgn',
            key: '2',
            value: {
              rgb: '396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396266666666396266663962396239623962396239623962396239623962396239623962396239623962396239626666666666666666666666666666396239623962396239623962396239623962396239623962396239623962396239626666666666663962666666666666666639623962396239623962396239623962396239623962396239623962396266666666666639623962666666666666666666663962396239623962396239623962396239623962396239623962396239626666396239623962396266666666666666663962396239623962396239623962396239623962396239623962396266663962396239623962396239623962666666663962396239623962396239623962396239623962396239623962396239623962303039623962396230303962396239623962396239623962396239623962396239623962396239623962396239623962396239623030396239623962396266663962396239623962396239623962396239623962396239623962396239623962396239623030396239623962666666663962396239623962396239623962396239623962396239623962396239623962396239623962396239623962666639623962396239623962396239623962396239623962396239623962396239623962396230303030303039623962666639623962396239623962396239623962396239623962396239623962396239626666396239626666396239626666666639623962396239623962396239623962396239623962396239623962396239623962666666666666666639626666396239623962396239623962396239623962396239623962396239623962396239626337396266666666396239623962396265353962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239626535396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623030396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623030396239623962396239623962653539623962396239623962396239623962396239623962633739623962396239623962396239623962396239623962653539623962396239623962396239623962396239623962396239623962396239623030396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962633739623962396239623030396239623962396239623962653539623962396239623962',
              creator: 'tz1c6Uibt7Vjr7MEFEQpohEa2f311KxZyJoZ',
              token_id: '2',
              token_name: '546f20206265',
              creator_name: '6872746b',
              token_description: '4f62736572766174696f6e20616e64204578697374656e6365',
            },
          },
        },
        {
          bigmap: 128184,
          path: 'token_metadata',
          action: 'add_key',
          content: {
            hash: 'expruDuAZnFKqmLoisJqUGqrNzXTvw7PJM2rYk97JErM5FHCerQqgn',
            key: '2',
            value: {
              token_id: '2',
              token_info: {
                '': '687474703a2f2f6c6f63616c686f73743a393939392f',
              },
            },
          },
        },
        {
          bigmap: 128183,
          path: 'token_total_supply',
          action: 'add_key',
          content: {
            hash: 'expruDuAZnFKqmLoisJqUGqrNzXTvw7PJM2rYk97JErM5FHCerQqgn',
            key: '2',
            value: '24',
          },
        },
        {
          bigmap: 128181,
          path: 'ledger',
          action: 'add_key',
          content: {
            hash: 'exprtkizmnWBT4GaWujG4tDWoSb8ZgHfP3ojqc51fLjpCTyNUodjNy',
            key: {
              nat: '2',
              address: 'tz1c6Uibt7Vjr7MEFEQpohEa2f311KxZyJoZ',
            },
            value: '24',
          },
        },
      ],
    },
  ];

  const events = transactionsToEvents(transactions, [EightbidMint24x24MonochromeHandler]);

  expect(events).toStrictEqual([
    {
      id: 'a824fe70d42bdb8a5a7ae4d03a874f20',
      type: '8BID_24X24_MONOCHROME_MINT',
      opid: 185960332,
      timestamp: '2022-03-12T17:17:54Z',
      level: 2190708,
      fa2_address: 'KT1TR1ErEQPTdtaJ7hbvKTJSa1tsGnHGZTpf',
      token_id: '2',

      editions: '24',
      artist_address: 'tz1c6Uibt7Vjr7MEFEQpohEa2f311KxZyJoZ',
      token_name: 'To  be',
      creator_name: 'hrtk',
      token_description: 'Observation and Existence',
      metadata_uri: 'http://localhost:9999/',
      rgb: '396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396266666666396266663962396239623962396239623962396239623962396239623962396239623962396239626666666666666666666666666666396239623962396239623962396239623962396239623962396239623962396239626666666666663962666666666666666639623962396239623962396239623962396239623962396239623962396266666666666639623962666666666666666666663962396239623962396239623962396239623962396239623962396239626666396239623962396266666666666666663962396239623962396239623962396239623962396239623962396266663962396239623962396239623962666666663962396239623962396239623962396239623962396239623962396239623962303039623962396230303962396239623962396239623962396239623962396239623962396239623962396239623962396239623030396239623962396266663962396239623962396239623962396239623962396239623962396239623962396239623030396239623962666666663962396239623962396239623962396239623962396239623962396239623962396239623962396239623962666639623962396239623962396239623962396239623962396239623962396239623962396230303030303039623962666639623962396239623962396239623962396239623962396239623962396239626666396239626666396239626666666639623962396239623962396239623962396239623962396239623962396239623962666666666666666639626666396239623962396239623962396239623962396239623962396239623962396239626337396266666666396239623962396265353962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239626535396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623030396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623030396239623962396239623962653539623962396239623962396239623962396239623962633739623962396239623962396239623962396239623962653539623962396239623962396239623962396239623962396239623962396239623030396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962396239623962633739623962396239623030396239623962396239623962653539623962396239623962',
    },
  ]);
});