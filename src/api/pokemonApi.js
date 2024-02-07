/** @format */

import { API_HOST } from "../utils/consts"

export const getPokemonsApi = async (nextUrl) => {
  try {
    const url = `${API_HOST}pokemon?limit=20&offset=0`

    const response = await fetch(nextUrl || url)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

export const getPokemonDetailApi = async (url) => {
  try {
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}

export const getDetailApi = async (id) => {
  try {
    const url = `${API_HOST}pokemon/${id}`
    const response = await fetch(url)
    const result = await response.json()
    return result
  } catch (error) {
    throw error
  }
}
