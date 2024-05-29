import SupabaseService from '@/service/SupabaseService'

export default new SupabaseService({
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseKey: import.meta.env.VITE_SUPABASE_PUBLIC_KEY
})
