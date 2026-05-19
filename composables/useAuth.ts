/**
 * Composable d'authentification - placeholder pour futur système JWT
 *
 * Architecture prévue :
 * - Login via API Laravel
 * - Tokens JWT stockés dans le store + localStorage
 * - Refresh token automatique
 * - Middleware de route protégée
 */
export function useAuth() {
  const isAuthenticated = ref(false)
  const user = ref(null)

  // Placeholder pour le futur
  const login = async (email: string, password: string) => {
    // Future: apiClient.post('/auth/login', { email, password })
    console.log('Auth login placeholder:', { email })
  }

  const logout = () => {
    isAuthenticated.value = false
    user.value = null
  }

  return {
    isAuthenticated,
    user,
    login,
    logout
  }
}