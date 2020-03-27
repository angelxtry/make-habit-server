export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type CreateHabitResponse = {
   __typename?: 'CreateHabitResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};



export type EmailSignUpResponse = {
   __typename?: 'EmailSignUpResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type GetHabitsResponse = {
   __typename?: 'GetHabitsResponse';
  ok: Scalars['Boolean'];
  habits?: Maybe<Array<Maybe<Habit>>>;
  error?: Maybe<Scalars['String']>;
};

export type Habit = {
   __typename?: 'Habit';
  id: Scalars['Int'];
  title: Scalars['String'];
  content: Scalars['String'];
  startAt: Scalars['Date'];
  ownerId: Scalars['Int'];
  owner: User;
  records?: Maybe<Array<Maybe<Record>>>;
  streakDays: Scalars['Int'];
  bestStreakDays: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  CreateHabit: CreateHabitResponse;
  EmailSignUp: EmailSignUpResponse;
};


export type MutationCreateHabitArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  startAt: Scalars['String'];
};


export type MutationEmailSignUpArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
  GetHabits: GetHabitsResponse;
  hello: Scalars['String'];
};

export type Record = {
   __typename?: 'Record';
  id: Scalars['Int'];
  title: Scalars['String'];
  content: Scalars['String'];
  date: Scalars['Date'];
  score: Score;
  habitId: Scalars['Int'];
  habit: Habit;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export enum Score {
  Bad = 'BAD',
  Soso = 'SOSO',
  Best = 'BEST'
}

export enum SnsDiv {
  None = 'NONE',
  Google = 'GOOGLE',
  Facebook = 'FACEBOOK'
}

export type User = {
   __typename?: 'User';
  id: Scalars['Int'];
  email?: Maybe<Scalars['String']>;
  verifiedEmail: Scalars['Boolean'];
  name: Scalars['String'];
  age?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  snsId?: Maybe<Scalars['String']>;
  snsDiv: SnsDiv;
  profilePhoto?: Maybe<Scalars['String']>;
  habits?: Maybe<Array<Maybe<Habit>>>;
  createdAt: Scalars['DateTime'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};
