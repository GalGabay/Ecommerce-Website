import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// fetchBaseQuery: allows us to make requests to our backend api
import { BASE_URL } from '../constants.js';

//using redux toolkit in here:
// apislice is the parent to all the slices

const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});
export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Product','Order', 'User'],
    endpoints: (builder) => ({})
});