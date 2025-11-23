/**
 * Dashboard API Module with RTK Query
 * 
 * Handles real-time data fetching from the NodeJS server.
 * Uses RTK Query for efficient data caching, synchronization, and automatic
 * refetching. Provides type-safe hooks for all API endpoints.
 * 
 * @module store/api/dashboardApi
 */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/**
 * Base URL for the API server
 * 
 * @description Can be configured via VITE_API_URL environment variable.
 * Falls back to localhost development server if not set.
 * 
 * @constant {string}
 * @default 'http://localhost:3001/api'
 */
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

/**
 * Dashboard API Instance
 * 
 * @description RTK Query API instance configured with base URL, authentication,
 * and all dashboard-related endpoints. Automatically handles caching, refetching,
 * and provides React hooks for data fetching.
 * 
 * @constant {Api}
 * 
 * @remarks
 * - Automatically handles caching and refetching
 * - Supports real-time updates via polling (dashboard data polls every 30s)
 * - Provides TypeScript types for all endpoints
 * - Includes authentication token in headers when available
 * - Uses cache tags for efficient cache invalidation
 * 
 * @example
 * ```tsx
 * import { useGetDashboardDataQuery } from './store/api/dashboardApi';
 * 
 * function Dashboard() {
 *   const { data, isLoading } = useGetDashboardDataQuery('30d');
 *   // ...
 * }
 * ```
 */
export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    /**
     * Prepares request headers with authentication token if available
     * 
     * @param {Headers} headers - Request headers object
     * @returns {Headers} Headers with authentication token added
     */
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
     * 
     * @description Retrieves key performance indicators, sales data, top products,
     * and quick stats for the dashboard. Automatically polls every 30 seconds
     * for real-time updates.
     * 
     * @param {string} period - Time period for the data (e.g., '30d', '7d', '1d')
     * @default '30d'
     * 
     * @returns {QueryBuilder} RTK Query builder for dashboard data
     * 
     * @example
     * ```tsx
     * const { data, isLoading, error } = useGetDashboardDataQuery('7d');
     * ```
     */
    getDashboardData: builder.query<DashboardData, string>({
      query: (period = '30d') => `/dashboard?period=${period}`,
      providesTags: ['Dashboard'],
      // Poll every 30 seconds for real-time updates
      pollingInterval: 30000,
    }),
    
    /**
     * Fetches orders list with optional filters
     * 
     * @description Retrieves a paginated list of orders with optional filtering
     * by status, date range, and pagination parameters.
     * 
     * @param {OrdersQueryParams} params - Query parameters for filtering and pagination
     * 
     * @returns {QueryBuilder} RTK Query builder for orders data
     * 
     * @example
     * ```tsx
     * const { data } = useGetOrdersQuery({
     *   status: 'completed',
     *   page: 1,
     *   limit: 20
     * });
     * ```
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
     * 
     * @description Retrieves detailed information for a specific order.
     * 
     * @param {string} id - Unique identifier of the order
     * 
     * @returns {QueryBuilder} RTK Query builder for single order data
     * 
     * @example
     * ```tsx
     * const { data } = useGetOrderQuery('order-123');
     * ```
     */
    getOrder: builder.query<Order, string>({
      query: (id) => `/orders/${id}`,
      providesTags: (result, error, id) => [{ type: 'Orders', id }],
    }),
    
    /**
     * Fetches products list
     * 
     * @description Retrieves a paginated list of products with optional search
     * and pagination parameters.
     * 
     * @param {ProductsQueryParams} params - Query parameters for search and pagination
     * 
     * @returns {QueryBuilder} RTK Query builder for products data
     * 
     * @example
     * ```tsx
     * const { data } = useGetProductsQuery({
     *   search: 'laptop',
     *   page: 1,
     *   limit: 10
     * });
     * ```
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
     * 
     * @description Retrieves a paginated list of clients with optional filtering
     * by type, search term, and pagination parameters.
     * 
     * @param {ClientsQueryParams} params - Query parameters for filtering and pagination
     * 
     * @returns {QueryBuilder} RTK Query builder for clients data
     * 
     * @example
     * ```tsx
     * const { data } = useGetClientsQuery({
     *   type: 'premium',
     *   search: 'john',
     *   page: 1
     * });
     * ```
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
     * 
     * @description Retrieves report data with optional date range and report type filters.
     * 
     * @param {ReportsQueryParams} params - Query parameters for date range and report type
     * 
     * @returns {QueryBuilder} RTK Query builder for reports data
     * 
     * @example
     * ```tsx
     * const { data } = useGetReportsQuery({
     *   startDate: '2024-01-01',
     *   endDate: '2024-01-31',
     *   type: 'sales'
     * });
     * ```
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

/**
 * React Hooks for Dashboard API
 * 
 * @description Type-safe React hooks generated by RTK Query for each endpoint.
 * These hooks provide data, loading states, error states, and refetch functions.
 * 
 * @example
 * ```tsx
 * import { useGetDashboardDataQuery } from './store/api/dashboardApi';
 * 
 * function Component() {
 *   const { data, isLoading, error, refetch } = useGetDashboardDataQuery('30d');
 *   // ...
 * }
 * ```
 */
export const {
  useGetDashboardDataQuery,
  useGetOrdersQuery,
  useGetOrderQuery,
  useGetProductsQuery,
  useGetClientsQuery,
  useGetReportsQuery,
} = dashboardApi;

/**
 * Type Definitions for Dashboard API
 * 
 * @description TypeScript interfaces and types for all API request/response structures.
 */

/**
 * Dashboard Data Response
 * 
 * @description Complete dashboard data structure containing KPIs, sales data,
 * top products, and quick statistics.
 * 
 * @interface DashboardData
 */
export interface DashboardData {
  /** Array of key performance indicators */
  kpis: KPIData[];
  /** Array of sales data points for charts */
  salesData: SalesDataPoint[];
  /** Top performing products */
  topProducts: Product[];
  /** Quick statistics summary */
  quickStats: QuickStats;
}

/**
 * KPI Data Structure
 * 
 * @description Represents a single key performance indicator card data.
 * 
 * @interface KPIData
 */
export interface KPIData {
  /** KPI title/label */
  title: string;
  /** Formatted value string (e.g., "€54,239") */
  value: string;
  /** Change percentage string (e.g., "+12.5%") */
  change: string;
  /** Whether the change is positive or negative */
  isPositive: boolean;
  /** Icon identifier or name */
  icon: string;
  /** Color theme for the KPI card */
  color: string;
}

/**
 * Sales Data Point
 * 
 * @description Single data point for sales charts/graphs.
 * 
 * @interface SalesDataPoint
 */
export interface SalesDataPoint {
  /** Day identifier (e.g., "Mon", "2024-01-15") */
  day: string;
  /** Sales amount for the day */
  sales: number;
}

/**
 * Product Information
 * 
 * @description Product data structure used in various contexts.
 * 
 * @interface Product
 */
export interface Product {
  /** Unique product identifier */
  id: string;
  /** Product name */
  product: string;
  /** Date string (ISO format or formatted) */
  date: string;
  /** Formatted amount string (e.g., "€1,234.56") */
  amount: string;
  /** Product status (e.g., "active", "inactive", "pending") */
  status: string;
}

/**
 * Quick Statistics Summary
 * 
 * @description Summary statistics displayed on the dashboard.
 * 
 * @interface QuickStats
 */
export interface QuickStats {
  /** Total number of products */
  totalProducts: number;
  /** Total collection amount (formatted string) */
  totalCollection: string;
  /** Number of active clients */
  activeClients: number;
}

/**
 * Orders Query Parameters
 * 
 * @description Optional parameters for filtering and paginating orders.
 * 
 * @interface OrdersQueryParams
 */
export interface OrdersQueryParams {
  /** Filter by order status (e.g., "pending", "completed", "cancelled") */
  status?: string;
  /** Date range filter (e.g., "30d", "7d", "2024-01-01,2024-01-31") */
  dateRange?: string;
  /** Page number for pagination (1-indexed) */
  page?: number;
  /** Number of items per page */
  limit?: number;
}

/**
 * Orders Response
 * 
 * @description Paginated response structure for orders list.
 * 
 * @interface OrdersResponse
 */
export interface OrdersResponse {
  /** Array of order objects */
  orders: Order[];
  /** Total number of orders matching the query */
  total: number;
  /** Current page number */
  page: number;
  /** Number of items per page */
  limit: number;
}

/**
 * Order Information
 * 
 * @description Complete order data structure.
 * 
 * @interface Order
 */
export interface Order {
  /** Unique order identifier */
  id: string;
  /** Customer name */
  customer: string;
  /** Order date (ISO format or formatted) */
  date: string;
  /** Total order amount (formatted string) */
  total: string;
  /** Order status (e.g., "pending", "completed", "shipped", "cancelled") */
  status: string;
  /** Customer email address */
  email: string;
  /** Number of items in the order */
  items: number;
  /** Payment method (e.g., "Credit Card", "PayPal", "Bank Transfer") */
  payment: string;
}

/**
 * Products Query Parameters
 * 
 * @description Optional parameters for searching and paginating products.
 * 
 * @interface ProductsQueryParams
 */
export interface ProductsQueryParams {
  /** Page number for pagination (1-indexed) */
  page?: number;
  /** Number of items per page */
  limit?: number;
  /** Search query string for filtering products */
  search?: string;
}

/**
 * Products Response
 * 
 * @description Paginated response structure for products list.
 * 
 * @interface ProductsResponse
 */
export interface ProductsResponse {
  /** Array of product objects */
  products: Product[];
  /** Total number of products matching the query */
  total: number;
  /** Current page number */
  page: number;
  /** Number of items per page */
  limit: number;
}

/**
 * Clients Query Parameters
 * 
 * @description Optional parameters for filtering and paginating clients.
 * 
 * @interface ClientsQueryParams
 */
export interface ClientsQueryParams {
  /** Page number for pagination (1-indexed) */
  page?: number;
  /** Number of items per page */
  limit?: number;
  /** Search query string for filtering clients by name or email */
  search?: string;
  /** Filter by client type (e.g., "premium", "standard", "enterprise") */
  type?: string;
}

/**
 * Clients Response
 * 
 * @description Paginated response structure for clients list.
 * 
 * @interface ClientsResponse
 */
export interface ClientsResponse {
  /** Array of client objects */
  clients: Client[];
  /** Total number of clients matching the query */
  total: number;
  /** Current page number */
  page: number;
  /** Number of items per page */
  limit: number;
}

/**
 * Client Information
 * 
 * @description Complete client data structure.
 * 
 * @interface Client
 */
export interface Client {
  /** Unique client identifier */
  id: string;
  /** Client name */
  name: string;
  /** Client email address */
  email: string;
  /** Total number of orders placed by the client */
  totalOrders: number;
  /** Total amount spent (formatted string) */
  totalSpent: string;
  /** Client type/category (e.g., "premium", "standard") */
  type: string;
  /** Date of last order (ISO format or formatted) */
  lastOrder: string;
  /** Client status (e.g., "active", "inactive", "suspended") */
  status: string;
}

/**
 * Reports Query Parameters
 * 
 * @description Optional parameters for filtering reports.
 * 
 * @interface ReportsQueryParams
 */
export interface ReportsQueryParams {
  /** Start date for the report (ISO format: "YYYY-MM-DD") */
  startDate?: string;
  /** End date for the report (ISO format: "YYYY-MM-DD") */
  endDate?: string;
  /** Report type (e.g., "sales", "revenue", "products", "clients") */
  type?: string;
}

/**
 * Reports Data Response
 * 
 * @description Generic structure for reports data.
 * 
 * @interface ReportsData
 */
export interface ReportsData {
  /** Array of report data points (structure varies by report type) */
  data: unknown[];
  /** Summary statistics object (keys vary by report type) */
  summary: Record<string, unknown>;
}

