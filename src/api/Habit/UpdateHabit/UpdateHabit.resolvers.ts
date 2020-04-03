import { IResolvers } from 'graphql-tools';
import authResolver from '@src/utils/authResolver';
import { reqContext } from '@src/types/types';
import {
  UpdateHabitResponse,
  MutationUpdateHabitArgs,
} from '@src/types/graphql';
import Habit from '@src/entities/Habit';

const resolver: IResolvers = {
  Mutation: {
    UpdateHabit: authResolver(
      async (
        _: unknown,
        args: MutationUpdateHabitArgs,
        { req }: reqContext,
      ): Promise<UpdateHabitResponse> => {
        const { user } = req;
        try {
          const { id } = args;
          const habit = await Habit.findOne({ id, owner: user });
          if (habit) {
            await Habit.update({ id: habit.id }, { ...args });
            return {
              ok: true,
              error: null,
            };
          }
          return {
            ok: false,
            error: 'Habit not found',
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

export default resolver;
