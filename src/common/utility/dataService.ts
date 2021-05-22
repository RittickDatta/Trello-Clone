import { Board } from "../interfaces/Board";

export const checkLocalStorage = () => {
    const isInitialState = localStorage.getItem('trelloData') === 'true';
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

export const addListToBoard = (boardId: string) => {

}

export const addCardToList = (boardId: string, listId: string) => {

}

export const removeListFromBoard = (boardId: string, listId: string) => {

}

export const removeCardFromList = (boardId: string, listId: string) => {

}