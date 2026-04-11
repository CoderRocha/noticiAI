export async function handler(event) {
  const apiKey = process.env.VITE_NEWS_API_KEY

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'API key not configured' }),
    }
  }

  const { category = 'general', lang = 'pt', country = 'br' } = event.queryStringParameters ?? {}

  const safeCategory = category.replace(/[^a-zA-Z]/g, '')
  const safeLang     = lang.replace(/[^a-zA-Z]/g, '')
  const safeCountry  = country.replace(/[^a-zA-Z]/g, '')

  const url = `https://gnews.io/api/v4/top-headlines?category=${safeCategory}&lang=${safeLang}&country=${safeCountry}&apikey=${apiKey}`

  try {
    const response = await fetch(url)
    const data = await response.json()

    return {
      statusCode: response.status,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch news' }),
    }
  }
}
