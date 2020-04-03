import { IResolvers } from 'graphql-tools';
import authResolver from '@src/utils/authResolver';
import { reqContext } from '@src/types/types';
import Habit from '@src/entities/Habit';
import { GetHabitsResponse } from '@src/types/graphql';

const resolver: IResolvers = {
  Query: {
    GetHabits: authResolver(
      async (
        _: unknown,
        __: unknown,
        { req }: reqContext,
      ): Promise<GetHabitsResponse> => {
        const { user } = req;
        try {
          const habits = await Habit.find({ ownerId: user.id });
          if (habits) {
            return {
              ok: true,
              habits,
              error: null,
            };
          }
          return {
            ok: true,
            habits: null,
            error: null,
          };
        } catch (error) {
          return {
            ok: false,
            habits: null,
            error: error.message,
          };
        }
      },
    ),
  },
};

export default resolver;
