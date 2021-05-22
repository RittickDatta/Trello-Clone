import { Board } from "../interfaces/Board";
import { Card } from "../interfaces/Card";
import { List } from "../interfaces/List";

export const checkLocalStorage = () => {
    let isInitialState = JSON.parse(JSON.stringify(localStorage.getItem('trelloData'))).length > 0;
    console.log(':::::::::isInitialState::::::::::', isInitialState)
    return isInitialState;
}

export const loadData = () => {
    if(checkLocalStorage()){
        const data = localStorage.getItem('trelloData')
        return data && JSON.parse(data);
    } else {
        localStorage.setItem('trelloData', JSON.stringify([{title: 'Board1'}]));
        const data = localStorage.getItem('trelloData')
        return data && JSON.parse(data);
    }
}

export const saveData = (data: Board) => {
    let localData = localStorage.getItem('trelloData')
    localData = localData && JSON.parse(localData) || []
    let updatedLocalData = [...JSON.parse(JSON.stringify(localData)), data]
    console.log(updatedLocalData)
    localStorage.setItem('trelloData', JSON.stringify(updatedLocalData))
}

export const getBoardData = (boardId: string) => {

}

export const addListToBoard = (data: List, boardId: string) => {

}

export const addCardToList = (data: Card, boardId: string, listId: string) => {

}

export const removeListFromBoard = (boardId: string, listId: string) => {

}

export const removeCardFromList = (boardId: string, listId: string) => {

}