import { IResolvers } from 'graphql-tools';
import authResolver from '@src/utils/authResolver';
import { reqContext } from '@src/types/types';
import Habit from '@src/entities/Habit';
import { GetHabitResponse, QueryGetHabitArgs } from '@src/types/graphql';

const resolver: IResolvers = {
  Query: {
    GetHabit: authResolver(
      async (
        _: unknown,
        args: QueryGetHabitArgs,
        { req }: reqContext,
      ): Promise<GetHabitResponse> => {
        const { user } = req;
        try {
          const habit = await Habit.findOne({ ownerId: user.id, id: args.id });
          if (habit) {
            return {
              ok: true,
              habit,
              error: null,
            };
          }
          return {
            ok: true,
            habit: null,
            error: null,
          };
        } catch (error) {
          return {
            ok: false,
            habit: null,
            error: error.message,
          };
        }
      },
    ),
  },
};

export default resolver;
