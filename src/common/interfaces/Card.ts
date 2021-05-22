import { CheckList } from "./CheckList";
import { Member } from "./Member";
import { Comment } from "./Comment";

export interface Card {
    id: string;
    title: string;
    listName: string;
    members?: Member[];
    description?: string;
    toDoLists?: CheckList[];
    comments?: Comment[];
}