import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4tfkklc01u701ue99zic9wf/master',
  cache: new InMemoryCache()
})