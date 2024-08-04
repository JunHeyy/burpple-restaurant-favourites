import { SubTask } from "./Subtask";


export type Task = {
    id: string;
    details?: string;
    completed: boolean;
    createdDate?: string;
    updatedDate?: string;
    subtasks?: SubTask[]; // List of subtasks
} & CreateTask;

export type CreateTask = {
    name: string;
};
