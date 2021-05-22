import { Member } from "./Member";
import { List } from "./List";

export interface Boards {
    title: string;
    isStarred: boolean;
    label: string[];
    isTeamVisible: boolean;
    members: Member[];
    lists: List[];
}