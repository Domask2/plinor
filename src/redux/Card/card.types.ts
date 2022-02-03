export interface ICard {
  id: number;
  title: string;
  width: number;
  array?: [
    {
      id?: number;
      title?: string;
      width?: number;
    }
  ];
}

export enum cardTypes {
  ADD_CARD = "ADD_CARD",
  ADD_CARD_SAGA = "ADD_CARD_SAGA",
  DELETE_CARD = "DELETE_CARD",
  DELETE_CARD_SAGA = "DELETE_CARD_SAGA",
  EDIT_CARD_WIDTH = "EDIT_CARD_WIDTH",
  EDIT_CARD_WIDTH_SAGA = "EDIT_CARD_WIDTH_SAGA",
  ADD_CARD_UP = "ADD_CARD_UP",
  ADD_CARD_UP_SAGA = "ADD_CARD_UP_SAGA",
  ADD_CARD_DOWN = "ADD_CARD_DOWN",
  ADD_CARD_DOWN_SAGA = "ADD_CARD_DOWN_SAGA",
  EDIT_NAME = "EDIT_NAME",
  EDIT_NAME_SAGA = "EDIT_NAME_SAGA",
}

export interface addCardPayloadI {
  newCard: ICard;
  childId?: number;
}

export interface addCardI {
  type: cardTypes.ADD_CARD;
  payload: addCardPayloadI;
}

export interface addCardSagaI {
  type: cardTypes.ADD_CARD_SAGA;
  payload: addCardPayloadI;
}

export interface addEditNameCardPayloadI {
  title: string;
  id: number;
  childId?: number
}

export interface addEditNameCardI {
  type: cardTypes.EDIT_NAME;
  payload: addEditNameCardPayloadI;
}

export interface addEditNameCardSagaI {
  type: cardTypes.EDIT_NAME_SAGA;
  payload: addEditNameCardPayloadI;
}

export interface editWidthCardPayloadI {
  width: any;
  id: number;
  childId?: number
}

export interface editWidthCardI {
  type: cardTypes.EDIT_CARD_WIDTH;
  payload: editWidthCardPayloadI;
}

export interface editWidthCardSagaI {
  type: cardTypes.EDIT_CARD_WIDTH_SAGA;
  payload: editWidthCardPayloadI;
}

export interface addCardUpPayloadI {
  id: number;
  childId?: number
}

export interface addCardUpI {
  type: cardTypes.ADD_CARD_UP;
  payload: addCardUpPayloadI;
}

export interface addCardUpSagaI {
  type: cardTypes.ADD_CARD_UP_SAGA;
  payload: addCardUpPayloadI;
}

export interface addCardDownPayloadI {
  id: number;
  childId?: number
}

export interface addCardDownI {
  type: cardTypes.ADD_CARD_DOWN;
  payload: addCardDownPayloadI;
}

export interface addCardDownSagaI {
  type: cardTypes.ADD_CARD_DOWN_SAGA;
  payload: addCardDownPayloadI;
}

export interface deleteCardPayloadI {
  id: number;
  childId?: number
}

export interface deleteCardI {
  type: cardTypes.DELETE_CARD;
  payload: deleteCardPayloadI;
}

export interface deleteCardSagaI {
  type: cardTypes.DELETE_CARD_SAGA;
  payload: deleteCardPayloadI;
}

export type CardAction = 
    addCardI 
  | addCardSagaI
  | addEditNameCardI
  | addEditNameCardSagaI
  | editWidthCardI
  | editWidthCardSagaI
  | addCardUpI
  | addCardUpSagaI
  | addCardDownI
  | addCardDownSagaI
  | deleteCardI
  | deleteCardSagaI
;
