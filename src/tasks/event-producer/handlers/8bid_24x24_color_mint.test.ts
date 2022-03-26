import EightbidMint24x24ColorHandler from './8bid_24x24_color_mint';
import { transactionsToEvents } from '../event-producer';
import { Transactions } from '../../../types';

test('creates 8BID_24X24_COLOR_MINT events', async () => {
  const transactions: Transactions = [
    {
      id: 184363860,
      level: 2181380,
      timestamp: '2022-03-09T09:58:14Z',
      block: 'BMQcTywjXBEaNqkacbNZ9v4fWXxEVEogUe8RrCvy1YDqxLSXWti',
      hash: 'ooaDMx42ezZs8518kzU37ECJ3oLb1tB8JAtDULHaFfpyaJEX3E2',
      counter: 14678282,
      sender: {
        alias: 'mare-mon',
        address: 'tz1Tx4yqNmhVXFDrRTMfG5J1Wntb3JaAiQ93',
      },
      target: {
        address: 'KT1VikAWA8wQHLZgHoAGL7Z9kCjgbCEnvWA3',
      },
      parameter: {
        entrypoint: 'mint',
        value: {
          rgb: {
            rgb: '663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239643562306263643562306263643562306263643562306263643562306263366137613833643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263613962386361613962386361613962386361613962386361366137613833366137613833366137613833613362326333613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613262316332366137613833396161396262366137613833353836383730366137613833363937393832363937393832363937393832363937393832363937393832393561346235396161396262396161396262396161396262396161396262396161396262396161396262396161396262396161396262396161396262396161396262393661356236363937393832363937393832363937393832363337333762353836383730353836383730353836383730353836383730363437343763363337333762363337333762363337333762363337333762363437343763353836383730353836383730386239626165386639666233386639666233386639666233386639666233386339636230363337333762363437343763353836383730363337333762363337333762353836383730353836383730353836383730353836383730353836383730353836383730353836383730353836383730363137313739363137313739353836383730353836383730353836383730353836383730623463346363623463346363623463346363623463346363363137313739353836383730353836383730353836383730353836383730353836383730623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262336330396562356332396562356332383139343965353035363539396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262336330396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262326266346335323535366637663837393161366232393161366232393561616237396562356332393961666263396562356332393961666263396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262336330396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332',
            creator: 'tz1Tx4yqNmhVXFDrRTMfG5J1Wntb3JaAiQ93',
            token_id: '0',
            token_name: '4c616b65204d6f6e73746572',
            creator_name: '6d6172652d6d6f6e',
            token_description: '546865204c6f6368204e6573732069732077656c6c206b6e6f776e2e',
          },
          mint_tx: {
            owner: 'tz1Tx4yqNmhVXFDrRTMfG5J1Wntb3JaAiQ93',
            amount: '5',
            token_id: '0',
          },
          token_meta: {
            token_id: '0',
            token_info: {
              '': '486579',
            },
          },
        },
      },
      amount: 0,
      status: 'applied',
      hasInternals: false,
      initiator: null,
      storage: {
        rgb: 124997,
        ledger: 124992,
        metadata: 124996,
        operators: 124993,
        token_index: '2',
        token_metadata: 124995,
        token_total_supply: 124994,
      },
      diffs: [
        {
          bigmap: 124997,
          path: 'rgb',
          action: 'add_key',
          content: {
            hash: 'expruDuAZnFKqmLoisJqUGqrNzXTvw7PJM2rYk97JErM5FHCerQqgn',
            key: '2',
            value: {
              rgb: '663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239643562306263643562306263643562306263643562306263643562306263366137613833643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263613962386361613962386361613962386361613962386361366137613833366137613833366137613833613362326333613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613262316332366137613833396161396262366137613833353836383730366137613833363937393832363937393832363937393832363937393832363937393832393561346235396161396262396161396262396161396262396161396262396161396262396161396262396161396262396161396262396161396262396161396262393661356236363937393832363937393832363937393832363337333762353836383730353836383730353836383730353836383730363437343763363337333762363337333762363337333762363337333762363437343763353836383730353836383730386239626165386639666233386639666233386639666233386639666233386339636230363337333762363437343763353836383730363337333762363337333762353836383730353836383730353836383730353836383730353836383730353836383730353836383730353836383730363137313739363137313739353836383730353836383730353836383730353836383730623463346363623463346363623463346363623463346363363137313739353836383730353836383730353836383730353836383730353836383730623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262336330396562356332396562356332383139343965353035363539396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262336330396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262326266346335323535366637663837393161366232393161366232393561616237396562356332393961666263396562356332393961666263396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262336330396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332',
              creator: 'tz1Tx4yqNmhVXFDrRTMfG5J1Wntb3JaAiQ93',
              token_id: '2',
              token_name: '4c616b65204d6f6e73746572',
              creator_name: '6d6172652d6d6f6e',
              token_description: '546865204c6f6368204e6573732069732077656c6c206b6e6f776e2e',
            },
          },
        },
        {
          bigmap: 124995,
          path: 'token_metadata',
          action: 'add_key',
          content: {
            hash: 'expruDuAZnFKqmLoisJqUGqrNzXTvw7PJM2rYk97JErM5FHCerQqgn',
            key: '2',
            value: {
              token_id: '2',
              token_info: {
                '': '486579',
              },
            },
          },
        },
        {
          bigmap: 124994,
          path: 'token_total_supply',
          action: 'add_key',
          content: {
            hash: 'expruDuAZnFKqmLoisJqUGqrNzXTvw7PJM2rYk97JErM5FHCerQqgn',
            key: '2',
            value: '5',
          },
        },
        {
          bigmap: 124992,
          path: 'ledger',
          action: 'add_key',
          content: {
            hash: 'exprvAfqpkJ1SngzUPJZz316NZi3iyFSZQbKSeHEmX98EqiFzcVa7P',
            key: {
              nat: '2',
              address: 'tz1Tx4yqNmhVXFDrRTMfG5J1Wntb3JaAiQ93',
            },
            value: '5',
          },
        },
      ],
    },
  ];

  const events = transactionsToEvents(transactions, [EightbidMint24x24ColorHandler]);

  expect(events).toStrictEqual([
    {
      id: '6b1c521f30320f7fb97756c8925781aa',
      type: '8BID_24X24_COLOR_MINT',
      opid: 184363860,
      timestamp: '2022-03-09T09:58:14Z',
      level: 2181380,
      fa2_address: 'KT1VikAWA8wQHLZgHoAGL7Z9kCjgbCEnvWA3',
      token_id: '2',

      editions: '5',
      artist_address: 'tz1Tx4yqNmhVXFDrRTMfG5J1Wntb3JaAiQ93',
      token_name: 'Lake Monster',
      creator_name: 'mare-mon',
      token_description: 'The Loch Ness is well known.',
      metadata_uri: 'Hey',
      rgb: '663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663965646530663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364663765336364646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239646562646239643562306263643562306263643562306263643562306263643562306263366137613833643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263643562306263613962386361613962386361613962386361613962386361366137613833366137613833366137613833613362326333613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613962386361613262316332366137613833396161396262366137613833353836383730366137613833363937393832363937393832363937393832363937393832363937393832393561346235396161396262396161396262396161396262396161396262396161396262396161396262396161396262396161396262396161396262396161396262393661356236363937393832363937393832363937393832363337333762353836383730353836383730353836383730353836383730363437343763363337333762363337333762363337333762363337333762363437343763353836383730353836383730386239626165386639666233386639666233386639666233386639666233386339636230363337333762363437343763353836383730363337333762363337333762353836383730353836383730353836383730353836383730353836383730353836383730353836383730353836383730363137313739363137313739353836383730353836383730353836383730353836383730623463346363623463346363623463346363623463346363363137313739353836383730353836383730353836383730353836383730353836383730623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363623463346363616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339616362656339613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613362396336613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334613162376334396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262336330396562356332396562356332383139343965353035363539396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262336330396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262326266346335323535366637663837393161366232393161366232393561616237396562356332393961666263396562356332393961666263396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396262336330396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396162326266396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332396562356332',
    },
  ]);
});