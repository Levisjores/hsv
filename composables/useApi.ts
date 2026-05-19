/**
 * Composable pour les appels API
 * Prépare l'architecture pour le futur backend Laravel
 */
export function useApi() {
  const { apiClient } = await import('~/services/api/client')

  return {
    api: apiClient,
    get: apiClient.get.bind(apiClient),
    post: apiClient.post.bind(apiClient),
    put: apiClient.put.bind(apiClient),
    delete: apiClient.delete.bind(apiClient)
  }
}