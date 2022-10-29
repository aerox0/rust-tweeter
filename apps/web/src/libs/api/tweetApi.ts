import { graphql } from "../../gql/gql";

export const tweetQuery = graphql(`
	query TweetList {
		tweetList {
			id
			userId
			content
			schedule
			createdAt
			updatedAt
		}
	}
`)