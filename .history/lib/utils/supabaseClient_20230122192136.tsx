import { createClient } from "@supabase/supabase-js"

// retrieving environment variables
const supabaseUrl = process.env.SUPABASE_URL as string
const supabaseKey = process.env.SUPABASE_KEY as string


export const supabase = createClient(supabaseUrl, supabaseKey)