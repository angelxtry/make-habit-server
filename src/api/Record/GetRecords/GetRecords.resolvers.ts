import { IResolvers } from 'graphql-tools';
import authResolver from '@src/utils/authResolver';
import { QueryGetRecordsArgs, GetRecordsResponse } from '@src/types/graphql';
import Record from '@src/entities/Record';

const resolver: IResolvers = {
  Query: {
    GetRecords: authResolver(
      async (
        _: unknown,
        args: QueryGetRecordsArgs,
      ): Promise<GetRecordsResponse> => {
        const { habitId } = args;
        try {
          const records = (await Record.find({ habitId })) || [];
          return {
            ok: true,
            records,
            error: null,
          };
        } catch (error) {
          return {
            ok: false,
            records: [],
            error: error.message,
          };
        }
      },
    ),
  },
};

export default resolver;
