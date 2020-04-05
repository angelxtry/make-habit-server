import { IResolvers } from 'graphql-tools';
import authResolver from '@src/utils/authResolver';
import {
  MutationCreateRecordArgs,
  CreateRecordResponse,
} from '@src/types/graphql';
import Habit from '@src/entities/Habit';
import Record from '@src/entities/Record';

const resolver: IResolvers = {
  Mutation: {
    CreateRecord: authResolver(
      async (
        _: unknown,
        args: MutationCreateRecordArgs,
      ): Promise<CreateRecordResponse> => {
        const {
          content, date, score, habitId,
        } = args;
        try {
          const habit = await Habit.findOne({ id: habitId });
          if (!habit) {
            return {
              ok: false,
              record: null,
              error: 'Not found habit',
            };
          }
          const record = await Record.create({
            content,
            date,
            score,
            habit,
          }).save();
          if (!record) {
            return {
              ok: false,
              record: null,
              error: 'Record create error',
            };
          }
          return {
            ok: true,
            record,
            error: null,
          };
        } catch (error) {
          return {
            ok: false,
            record: null,
            error: error.message,
          };
        }
      },
    ),
  },
};

export default resolver;
