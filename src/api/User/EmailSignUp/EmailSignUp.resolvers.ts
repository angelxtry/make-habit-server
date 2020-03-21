import { IResolvers } from 'graphql-tools';
import User from '../../../entities/User';
import createJWT from '../../../utils/createJWT';
import {
  MutationEmailSignUpArgs,
  EmailSignUpResponse,
} from '../../../types/graphql';

const resolver: IResolvers = {
  Mutation: {
    EmailSignUp: async (
      _: undefined,
      args: MutationEmailSignUpArgs,
    ): Promise<EmailSignUpResponse> => {
      const { email } = args;
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: 'Already exist email. Please sign in.',
            token: null,
          };
        }
        const newUser = await User.create({ ...args }).save();
        // 이메일 인증 추가
        const token = createJWT(newUser.id);
        return {
          ok: true,
          error: null,
          token,
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
