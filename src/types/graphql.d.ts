export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type EmailSignUpResponse = {
   __typename?: 'EmailSignUpResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type Habit = {
   __typename?: 'Habit';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  startAt: Scalars['String'];
  ownerId: Scalars['Int'];
  owner: User;
  records?: Maybe<Array<Maybe<Record>>>;
  streakDays: Scalars['Int'];
  bestStreakDays: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  EmailSignUp: EmailSignUpResponse;
};


export type MutationEmailSignUpArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  hello: Scalars['String'];
};

export type Record = {
   __typename?: 'Record';
  id: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['String'];
  score: Score;
  habitId: Scalars['Int'];
  habit: Habit;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export enum Score {
  Bad = 'BAD',
  Soso = 'SOSO',
  Best = 'BEST'
}

export enum SnsDiv {
  Google = 'GOOGLE',
  Facebook = 'FACEBOOK'
}

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  verifiedEmail: Scalars['Boolean'];
  name: Scalars['String'];
  age?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  snsId?: Maybe<Scalars['String']>;
  snsDiv?: Maybe<SnsDiv>;
  profilePhoto?: Maybe<Scalars['String']>;
  habits?: Maybe<Array<Maybe<Habit>>>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};
