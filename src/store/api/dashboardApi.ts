/**
 * Dashboard API with RTK Query
 * 
 * Handles real-time data fetching from the NodeJS server.
 * Uses RTK Query for efficient data caching and synchronization.
 * 
 * module store/api/dashboardApi
 */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Base URL for the API server
 * Can be configured via environment variables
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

/**
 * Dashboard API endpoints
 * 
 * remarks
 * - Automatically handles caching and refetching
 * - Supports real-time updates via polling or subscriptions
 * - Provides TypeScript types for all endpoints
 */
export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers) => {
      // Add authentication headers if needed
      const token = localStorage.getItem('authToken');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['Dashboard', 'Orders', 'Products', 'Clients', 'Reports'],
  endpoints: (builder) => ({
    /**
     * Fetches dashboard KPIs and metrics
     * param period - Time period for the data (e.g., '30d', '7d', '1d')
     */
    getDashboardData: builder.query<DashboardData, string>({
      query: (period = '30d') => `/dashboard?period=${period}`,
      providesTags: ['Dashboard'],
      // Poll every 30 seconds for real-time updates
      pollingInterval: 30000,
    }),
    
    /**
     * Fetches orders list with optional filters
     */
    getOrders: builder.query<OrdersResponse, OrdersQueryParams>({
      query: (params) => ({
        url: '/orders',
        params: {
          status: params.status,
          dateRange: params.dateRange,
          page: params.page,
          limit: params.limit,
        },
      }),
      providesTags: ['Orders'],
    }),
    
    /**
     * Fetches a single order by ID
     */
    getOrder: builder.query<Order, string>({
      query: (id) => `/orders/${id}`,
      providesTags: (result, error, id) => [{ type: 'Orders', id }],
    }),
    
    /**
     * Fetches products list
     */
    getProducts: builder.query<ProductsResponse, ProductsQueryParams>({
      query: (params) => ({
        url: '/products',
        params: {
          page: params.page,
          limit: params.limit,
          search: params.search,
        },
      }),
      providesTags: ['Products'],
    }),
    
    /**
     * Fetches clients list
     */
    getClients: builder.query<ClientsResponse, ClientsQueryParams>({
      query: (params) => ({
        url: '/clients',
        params: {
          page: params.page,
          limit: params.limit,
          search: params.search,
          type: params.type,
        },
      }),
      providesTags: ['Clients'],
    }),
    
    /**
     * Fetches reports data
     */
    getReports: builder.query<ReportsData, ReportsQueryParams>({
      query: (params) => ({
        url: '/reports',
        params: {
          startDate: params.startDate,
          endDate: params.endDate,
          type: params.type,
        },
      }),
      providesTags: ['Reports'],
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetDashboardDataQuery,
  useGetOrdersQuery,
  useGetOrderQuery,
  useGetProductsQuery,
  useGetClientsQuery,
  useGetReportsQuery,
} = dashboardApi;

// Type definitions
export interface DashboardData {
  kpis: KPIData[];
  salesData: SalesDataPoint[];
  topProducts: Product[];
  quickStats: QuickStats;
}

export interface KPIData {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
  color: string;
}

export interface SalesDataPoint {
  day: string;
  sales: number;
}

export interface Product {
  id: string;
  product: string;
  date: string;
  amount: string;
  status: string;
}

export interface QuickStats {
  totalProducts: number;
  totalCollection: string;
  activeClients: number;
}

export interface OrdersQueryParams {
  status?: string;
  dateRange?: string;
  page?: number;
  limit?: number;
}

export interface OrdersResponse {
  orders: Order[];
  total: number;
  page: number;
  limit: number;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  total: string;
  status: string;
  email: string;
  items: number;
  payment: string;
}

export interface ProductsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
}

export interface ClientsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  type?: string;
}

export interface ClientsResponse {
  clients: Client[];
  total: number;
  page: number;
  limit: number;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  totalOrders: number;
  totalSpent: string;
  type: string;
  lastOrder: string;
  status: string;
}

export interface ReportsQueryParams {
  startDate?: string;
  endDate?: string;
  type?: string;
}

export interface ReportsData {
  data: unknown[];
  summary: Record<string, unknown>;
}

