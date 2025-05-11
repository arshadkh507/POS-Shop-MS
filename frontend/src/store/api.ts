import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const posApi = createApi({
  reducerPath: "posApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/products" }),
    // other endpoints
  }),
});

export const { useGetProductsQuery } = posApi;
