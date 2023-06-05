import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const greetingApi = createApi({
  reducerPath: "greetingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (builder) => ({
    getRandomGreeting: builder.query({
      query: () => "greetings/random",
    }),
  }),
});

export const { useGetRandomGreetingQuery } = greetingApi;

export default greetingApi;
