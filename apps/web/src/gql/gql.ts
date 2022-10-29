/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n\tquery TweetList {\n\t\ttweetList {\n\t\t\tid\n\t\t\tuserId\n\t\t\tcontent\n\t\t\tschedule\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n": types.TweetListDocument,
};

export function graphql(source: "\n\tquery TweetList {\n\t\ttweetList {\n\t\t\tid\n\t\t\tuserId\n\t\t\tcontent\n\t\t\tschedule\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery TweetList {\n\t\ttweetList {\n\t\t\tid\n\t\t\tuserId\n\t\t\tcontent\n\t\t\tschedule\n\t\t\tcreatedAt\n\t\t\tupdatedAt\n\t\t}\n\t}\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;