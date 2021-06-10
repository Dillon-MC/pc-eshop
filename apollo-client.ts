import { mergeDeep, relayStylePagination } from '@apollo/client/utilities';
import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { isEqual } from '@graphql-tools/utils';
import { useMemo } from 'react';
import { argsToArgsConfig } from 'graphql/type/definition';

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = (): ApolloClient<NormalizedCacheObject | undefined> => {
    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        uri: "http://localhost:4000/graphql",
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        name(_, { args, toReference }: {args: any, toReference: any}) {
                            return toReference({
                                __typename: "Product",
                                name: args.name
                            });
                        },
                    }
                }
            }
        }),
    });
}

export const initializeApollo = (initialState: NormalizedCacheObject | null = null) => {
    const _apolloClient: any = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();

        // Merge the existing cache into data passed from getStaticProps/getServerSideProps
        const data = mergeDeep(initialState, existingCache, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (destinationArray: [], sourceArray: []) => [
                ...sourceArray,
                ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
            ],
        });

        // Restore the cache with the merged data
        _apolloClient.cache.restore(data);
    }

    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient;

    // Create the Apollo Client once in the client
    if(!apolloClient) apolloClient = _apolloClient;

    return _apolloClient
}

export const addApolloState = (client: ApolloClient<NormalizedCacheObject>, pageProps: any) => {
    if(pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
    }

    return pageProps;
}

export default function useApollo(pageProps: any) {
    const state = pageProps[APOLLO_STATE_PROP_NAME];
    const store = useMemo(() => initializeApollo(state), [state]);
    return store;
}