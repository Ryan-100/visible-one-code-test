import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => '/posts', 
    }),
  }),
});

export const { useGetAllPostsQuery } = postApi;
