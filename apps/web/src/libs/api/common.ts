import request, { RequestDocument, Variables } from "graphql-request"
import {TypedDocumentNode} from '@graphql-typed-document-node/core'

export const apiConfig = {
	endpoint: `${process.env.NEXT_PUBLIC_API_ENDPOINT}/graphql`
}

export const apiRequest = <T>(document: RequestDocument | TypedDocumentNode<T, Variables>, variables?: Variables, requestHeaders?: HeadersInit) => request(apiConfig.endpoint, document, variables)