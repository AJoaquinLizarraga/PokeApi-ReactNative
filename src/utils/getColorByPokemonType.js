/** @format */

import { POKEMON_TYPE_COLORS } from "./consts"

const getColorByPokemonType = (type) => {
  return POKEMON_TYPE_COLORS[type.toLowerCase()] || "#000000"
}

export default getColorByPokemonType
