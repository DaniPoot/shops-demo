import { createClient } from '@supabase/supabase-js'

export default class SupabaseService {

  constructor({
    supabaseUrl,
    supabaseKey
  }) {
    this.supabase = createClient(supabaseUrl, supabaseKey, {
      localStorage: window.localStorage
    })
  }

  loginWithGithub() {
     return  this.supabase.auth.signInWithOAuth({
       provider: 'github'
     })
  }

  retriveUser() {
    return this.supabase.auth.getUser()
  }

  async setAccessToken() {
    const token = (await this.supabase.auth.getSession()).data.session?.access_token
    localStorage.setItem('auth_token', token)
  }
}
