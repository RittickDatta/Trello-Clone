import { Board } from "../interfaces/Board";
import { Card } from "../interfaces/Card";
import { List } from "../interfaces/List";

export const checkLocalStorage = () => {
    let isInitialState = localStorage.getItem('trelloData') && JSON.parse(JSON.stringify(localStorage.getItem('trelloData'))).length > 0 || false;
    console.log(':::::::::isInitialState::::::::::', isInitialState)
    return isInitialState;
}

export const loadData = () => {
    if(checkLocalStorage()){
        const data = localStorage.getItem('trelloData')
        return data && JSON.parse(data);
    } else {
        localStorage.setItem('trelloData', JSON.stringify([]));
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
    let localData = localStorage.getItem('trelloData')
    localData = localData && JSON.parse(localData) || []
    let updatedLocalData = [...JSON.parse(JSON.stringify(localData))]
    let boardToUpdate = updatedLocalData.filter((board) => board.id === boardId)[0];
    let updatedList;
    if(boardToUpdate.lists && boardToUpdate.lists.length > 0) {
        updatedList = [...boardToUpdate.lists, data]
    } else {
        updatedList = [data] 
    }
    boardToUpdate.lists = updatedList;
    const boardIndex = updatedLocalData.findIndex((board) => board.id === boardId)
    updatedLocalData.splice(boardIndex, 1, boardToUpdate);
    console.log(updatedLocalData)
    localStorage.setItem('trelloData', JSON.stringify(updatedLocalData))
}

export const addCardToList = (data: Card, boardId: string, listId: string) => {
    console.log({data, boardId, listId})
    let localData = localStorage.getItem('trelloData')
    localData = localData && JSON.parse(localData) || []
    let updatedLocalData = [...JSON.parse(JSON.stringify(localData))]
    console.log('Local Data------->',updatedLocalData)
    let boardToUpdate = updatedLocalData.filter((board) => board.id === boardId)[0];
    console.log('Board to update', boardToUpdate)
    let listToUpdate = boardToUpdate.lists.filter((list:any) => list.id === listId)[0];
    console.log('List to update', listToUpdate)
    let updatedCards;
    if(listToUpdate.cards){
        updatedCards = [...listToUpdate, data]
    } else {
        updatedCards = [data]
    }
    listToUpdate.cards = updatedCards;
    console.log('Updated List',listToUpdate)
    boardToUpdate.lists = [...boardToUpdate.lists, listToUpdate];
    console.log(boardToUpdate);

    const boardIndex = updatedLocalData.findIndex((board) => board.id === boardId)
    updatedLocalData.splice(boardIndex, 1, boardToUpdate);
    console.log(updatedLocalData)
    localStorage.setItem('trelloData', JSON.stringify(updatedLocalData))
}

export const moveCard = (card: Card, cardId: string, listId: string, boardId: string) => {
    console.log(cardId, listId, boardId)

    //Get Local Data
    let localData = localStorage.getItem('trelloData')
    localData = localData && JSON.parse(localData) || []
    let updatedLocalData = [...JSON.parse(JSON.stringify(localData))]
    console.log('Local Data------->',updatedLocalData)

    //Get Board
    let boardToUpdate = updatedLocalData.filter((board) => board.id === boardId)[0];
    console.log('Board to update', boardToUpdate)

    //Get List
    let listToUpdate = boardToUpdate.lists.filter((list:any) => list.id === listId)[0];
    console.log('List to update', listToUpdate)

    //Remove from above list
    const cardIndex = listToUpdate.cards.findIndex((card:any) => card.id === cardId)
    listToUpdate.cards.splice(cardIndex, 1)

    boardToUpdate.lists = [...boardToUpdate.lists, listToUpdate];
    console.log('Board to update lists',boardToUpdate.lists)
    // Get List index
    let listIndex = boardToUpdate.lists.findIndex((list:any) => list.id === listId)
    listIndex += 1;

    //Get next list
    let nextListToUpdate = boardToUpdate.lists[listIndex];
    console.log('nextListToUpdate-->', boardToUpdate.lists, listIndex)

    // Update cards
    let updatedCards = (nextListToUpdate.card && nextListToUpdate.card.length > 0) && [...nextListToUpdate.cards, card] 

    // Add to this list
    nextListToUpdate.cards = (nextListToUpdate.card && nextListToUpdate.card.length > 0) && updatedCards;

    // Update board list
    boardToUpdate.lists = [...boardToUpdate.lists, nextListToUpdate];

    // Set updated board data
    const boardIndex = updatedLocalData.findIndex((board) => board.id === boardId)
    updatedLocalData.splice(boardIndex, 1, boardToUpdate);

    // Save in local storage

    console.log(updatedLocalData)
    localStorage.setItem('trelloData', JSON.stringify(updatedLocalData))
}

export const removeListFromBoard = (boardId: string, listId: string) => {

}

export const removeCardFromList = (boardId: string, listId: string) => {

}