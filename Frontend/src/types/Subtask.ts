
export type SubTask = {
    id: string;
    details?: string;
    completed: boolean;
    createdDate?: string;
    updatedDate?: string;
    parentTaskId: string; // Reference to the parent task ID
} & CreateSubTask;

export type CreateSubTask = {
    name: string;
    details: string;
};
