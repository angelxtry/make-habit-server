import { IResolvers } from 'graphql-tools';
import User from '@src/entities/User';
import createJWT from '@src/utils/createJWT';
import {
  MutationEmailSignInArgs,
  EmailSignInResponse,
} from '@src/types/graphql';

const resolver: IResolvers = {
  Mutation: {
    EmailSignIn: async (
      _: undefined,
      args: MutationEmailSignInArgs,
    ): Promise<EmailSignInResponse> => {
      const { email, password } = args;
      try {
        const user = await User.findOne({ email });
        if (!user) {
          return {
            ok: false,
            error: 'No user',
            token: null,
          };
        }
        const checkPassword = await user.comparePassword(password);
        if (checkPassword) {
          const token = createJWT(user.id);
          return {
            ok: true,
            error: null,
            token,
          };
        }
        return {
          ok: false,
          error: 'Wrong password',
          token: null,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null,
        };
      }
    },
  },
};

export default resolver;
