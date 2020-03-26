import { IResolvers } from 'graphql-tools';
import {
  MutationCreateHabitArgs,
  CreateHabitResponse,
} from '@src/types/graphql';
import { reqContext } from '@src/types/types';
import Habit from '@src/entities/Habit';
import authResolver from '@src/utils/authResolver';

const resolvers: IResolvers = {
  Mutation: {
    CreateHabit: authResolver(
      async (
        _: undefined,
        args: MutationCreateHabitArgs,
        { req }: reqContext,
      ): Promise<CreateHabitResponse> => {
        const { user } = req;
        try {
          await Habit.create({ ...args, owner: user }).save();
          return {
            ok: true,
            error: null,
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
