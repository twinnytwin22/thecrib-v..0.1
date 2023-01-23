import { createClient } from "@supabase/supabase-js"

// retrieving environment variables
const supabaseUrl = process.env.SUPABASE_URL || ""
const supabaseKey = process.env.SUPABASE_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseKey)