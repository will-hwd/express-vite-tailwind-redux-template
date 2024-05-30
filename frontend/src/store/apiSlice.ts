import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({ baseUrl: "/api" });

export const globalApi = createApi({
    reducerPath: "globalApi",
    baseQuery: baseQuery,
    endpoints: () => ({}),
    tagTypes: ["Settings", "Exclusions", "Correspondence", "DbLogs", "Users", "Customers", "Transactions", "Draws", "Prizes", "prizeWinners", "CustomerValidation", "lotteryNumbers", "Incentives", "PaymentManagement"]
})

// Usage example - can split injected endpoints into different files using this method
export const injectedEndpoints = globalApi.injectEndpoints({
    endpoints: () => ({})
})