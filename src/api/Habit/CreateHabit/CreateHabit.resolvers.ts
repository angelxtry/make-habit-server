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
          const habit = await Habit.create({ ...args, owner: user }).save();
          return {
            ok: true,
            habit,
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

export default resolvers;
