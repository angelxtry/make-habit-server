import { IResolvers } from 'graphql-tools';
import {
  MutationDeleteHabitArgs,
  DeleteHabitResponse,
} from '@src/types/graphql';
import { reqContext } from '@src/types/types';
import Habit from '@src/entities/Habit';
import authResolver from '@src/utils/authResolver';

const resolvers: IResolvers = {
  Mutation: {
    DeleteHabit: authResolver(
      async (
        _: undefined,
        args: MutationDeleteHabitArgs,
        { req }: reqContext,
      ): Promise<DeleteHabitResponse> => {
        const { user } = req;
        try {
          const habit = await Habit.findOne({ ...args, owner: user });
          if (habit) {
            await habit.remove();
            return {
              ok: true,
              error: null,
            };
          }
          return {
            ok: false,
            error: 'Not found habit',
          };
        } catch (error) {
          return {
            ok: false,
            error: error.message,
          };
        }
      },
    ),
  },
};

export default resolvers;
