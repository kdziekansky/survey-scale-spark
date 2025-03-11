
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Use environment variables if available, otherwise use fallback values from .env.example
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://bqbgrjpxufblrgcoxpfk.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxYmdyanB4dWZibHJnY294cGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1Mzk4NzUsImV4cCI6MjA1NzExNTg3NX0.kSryhe5Z4BILp_ss5LpSxanGSvx4HZzZtVzYia4bgik";

// Log initialization
console.info("Initializing Supabase client");

// Check if keys are available
if (!SUPABASE_URL) {
  console.error("Missing SUPABASE_URL configuration - using default value");
}

if (!SUPABASE_ANON_KEY) {
  console.error("Missing SUPABASE_ANON_KEY configuration - using default value");
}

console.info("Using Supabase URL:", SUPABASE_URL);

// Add Stripe publishable key constant
export const STRIPE_PUBLISHABLE_KEY = "pk_test_51R1AxJIY3wH8ltzbjfmYXzIMyNXdDHK19zPkcnjUlgxZeqfe2NiQYkcheHyK8QkwbG7DdfY8c3naJEuOG3JebxJ200v7kA5ZfK";

let supabase;

try {
  // Import the supabase client like this:
  // import { supabase } from "@/integrations/supabase/client";
  supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
    db: {
      schema: 'public',
    },
    global: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  });
  
  // For debugging - log configuration keys in browser console
  console.info("Supabase URL configured:", SUPABASE_URL ? "YES" : "NO");
  console.info("Supabase ANON KEY configured:", SUPABASE_ANON_KEY ? "YES" : "NO");
  console.info("Supabase client initialized successfully");
} catch (error) {
  console.error("Error creating Supabase client:", error);
  // Create a fallback client that will error gracefully
  // @ts-ignore - We know this will fail, but this prevents the app from crashing on load
  supabase = {
    from: () => ({
      select: () => ({
        eq: () => ({
          single: () => Promise.reject(new Error("Supabase client failed to initialize")),
          maybeSingle: () => Promise.reject(new Error("Supabase client failed to initialize")),
        }),
      }),
    }),
  };
}

// Export the fetch function for direct API calls
export const fetchFromSupabase = async (path: string, options = {}) => {
  const url = `${SUPABASE_URL}/rest/v1/${path}`;
  const headers = {
    'apikey': SUPABASE_ANON_KEY,
    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation',
  };

  try {
    console.log(`Direct API call to: ${url}`);
    const response = await fetch(url, {
      ...options,
      headers: {
        ...headers,
        ...(options as any).headers,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Supabase direct API error:', error);
      throw new Error(error.message || 'Failed to fetch from Supabase');
    }

    const data = await response.json();
    console.log(`Direct API response:`, data);
    return data;
  } catch (error) {
    console.error('Error in direct Supabase API call:', error);
    throw error;
  }
};

export { supabase };
