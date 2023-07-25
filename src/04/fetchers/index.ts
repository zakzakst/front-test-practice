import { Profile, Article, Articles, ArticleInput } from './type'

const handleResponse = async (res: Response) => {
  const data = await res.json()
  if (!res.ok) {
    throw data
  }
  return data
}

const host = (path: string) => `https://myapi.testing.com${path}`

export const getMyProfile = (): Promise<Profile> => {
  return fetch(host('/my/profile')).then(handleResponse)
}

export const getMyArticles = (): Promise<Articles> => {
  return fetch(host('/my/articles')).then(handleResponse)
}

export const postMyArticle = (input: ArticleInput): Promise<Article> => {
  return fetch(host('/my/articles'), {
    method: 'POST',
    body: JSON.stringify(input),
  }).then(handleResponse)
}
