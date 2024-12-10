import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type GqlCreatePostInput = {
  readonly body: Scalars['String']['input'];
  readonly title: Scalars['String']['input'];
  readonly userId: Scalars['Int']['input'];
};

export type GqlUpdatePostInput = {
  readonly body: InputMaybe<Scalars['String']['input']>;
  readonly title: InputMaybe<Scalars['String']['input']>;
  readonly userId: InputMaybe<Scalars['Int']['input']>;
};

export type GqlGetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlGetUsersQuery = { readonly users: ReadonlyArray<{ readonly __typename?: 'User', readonly id: number, readonly name: string | null, readonly username: string | null, readonly email: string | null, readonly phone: string | null, readonly website: string | null } | null> | null };

export const GetUsersDocument = gql`
    query getUsers {
  users {
    id
    name
    username
    email
    phone
    website
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GqlGetUsersRequest extends Apollo.Query<GqlGetUsersQuery, GqlGetUsersQueryVariables> {
    document = GetUsersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }