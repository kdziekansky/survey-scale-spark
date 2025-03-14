
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
export const STRIPE_PUBLISHABLE_KEY = "pk_live_51R1AxDI1gdf4PaDcceM1NokcVee3cfnDG5xZq9sqycPlvpsFxENWVojPoXmsavaZXOykgWEY66Th0w5eNS5FV6Ub00RIpHVp1p";

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
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Prefer': 'return=representation'
      },
    },
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
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
  
  // Głębokie logowanie zapytania
  console.log(`Przygotowywanie zapytania do Supabase:`, {
    url,
    method: (options as any).method || 'GET',
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation',
      ...(options as any).headers
    }
  });

  try {
    console.log(`Direct API call to: ${url}`);
    const response = await fetch(url, {
      ...options,
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation',
        ...(options as any).headers,
      },
    });

    console.log(`Otrzymano odpowiedź od API:`, {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries([...(response.headers as any)]),
    });

    // Dla operacji DELETE zwracamy status powodzenia
    if ((options as any).method === 'DELETE') {
      if (response.status >= 200 && response.status < 300) {
        return { success: true, status: response.status };
      } else {
        const error = await response.json().catch(() => ({ message: response.statusText }));
        console.error('Supabase DELETE error:', error);
        throw new Error(error.message || `Błąd usuwania (status ${response.status})`);
      }
    }

    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: response.statusText }));
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
