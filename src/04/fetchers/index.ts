import { Profile, Articles } from './type'

const handleResponse = async (res: Response) => {
  const data = await res.json()
  if (!res.ok) {
    throw data
  }
  return data
}

export const getMyProfile = (): Promise<Profile> => {
  return fetch('/my/profile').then(handleResponse)
}

export const getMyArticles = (): Promise<Articles> => {
  return fetch('/my/articles').then(handleResponse)
}
