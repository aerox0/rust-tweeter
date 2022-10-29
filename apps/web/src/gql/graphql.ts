/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * ISO 8601 combined date and time without timezone.
   *
   * # Examples
   *
   * * `2015-07-01T08:59:60.123`,
   */
  NaiveDateTime: any;
};

export type QueryRoot = {
  __typename?: 'QueryRoot';
  hello: Scalars['String'];
  tweetList: Array<Tweet>;
  userList: Array<User>;
};

export type Tweet = {
  __typename?: 'Tweet';
  content: Scalars['String'];
  createdAt: Scalars['NaiveDateTime'];
  id: Scalars['Int'];
  schedlue?: Maybe<Scalars['NaiveDateTime']>;
  updatedAt: Scalars['NaiveDateTime'];
  userId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['NaiveDateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imageUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt: Scalars['NaiveDateTime'];
  username: Scalars['String'];
};

export type TweetListQueryVariables = Exact<{ [key: string]: never; }>;


export type TweetListQuery = { __typename?: 'QueryRoot', tweetList: Array<{ __typename?: 'Tweet', id: number, userId: number, content: string, createdAt: any, updatedAt: any }> };


export const TweetListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"TweetList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tweetList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<TweetListQuery, TweetListQueryVariables>;