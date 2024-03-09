import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_API_PATH ?? 'http://localhost:3000'
const apiToken = process.env.NEXT_PUBLIC_API_TOKEN ?? ''

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + apiToken
  }
})
