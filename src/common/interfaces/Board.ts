import { Member } from "./Member";
import { List } from "./List";

export interface Board {
    id: string;
    title: string;
    isStarred?: boolean;
    label?: string[];
    isTeamVisible?: boolean;
    members?: Member[];
    lists?: List[];
}