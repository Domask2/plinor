import { ICard } from "../redux/Card/card.types"

export const getIndexArray = (array:ICard[], id:number): any => {
  return array.findIndex((arr) => arr.id === id)
} 