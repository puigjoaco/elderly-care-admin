import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Service key should only be used on the server side
// For client-side operations, use the anon key
export const supabaseAdmin = typeof window === 'undefined' && process.env.SUPABASE_SERVICE_KEY
  ? createClient(supabaseUrl, process.env.SUPABASE_SERVICE_KEY)
  : supabase