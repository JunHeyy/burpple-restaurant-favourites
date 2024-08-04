import React, { useState } from "react";
import { Checkbox, Button, Popconfirm, message, Input } from "antd";

interface SubTask {
    id: number;
    name: string;
    details: string;
    completed: boolean;
}

interface CreateSubTask {
    name: string;
    details: string;
}

interface Task {
    id: number;
    name: string;
    completed: boolean;
}

interface TaskItemProps {
    task: Task;
    // fetchTasks function removed as it's no longer needed
}

export const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
    const [subTasks, setSubTasks] = useState<SubTask[]>([
        { id: 1, name: "Sample Subtask 1", details: "Details of subtask 1", completed: false },
        { id: 2, name: "Sample Subtask 2", details: "Details of subtask 2", completed: false },
    ]);
    const [newSubTask, setNewSubTask] = useState<CreateSubTask>({ name: '', details: '' });

    const deleteSelectedTask = (taskID: number) => {
        // Normally you would delete from backend, but for now we'll just log a message
        console.log(`Task ${taskID} would be deleted`);
        message.success("Task deleted!");
    };

    const handleAddSubTask = () => {
        const newTask: SubTask = {
            id: subTasks.length + 1,
            name: newSubTask.name,
            details: newSubTask.details,
            completed: false,
        };

        setSubTasks([...subTasks, newTask]);
        setNewSubTask({ name: '', details: '' });
    };

    return (
        <div style={{ width: "100%" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                    checked={task.completed}
                    onChange={() => { }}
                >
                    <span
                        style={{ textDecoration: task.completed ? "line-through" : "none" }}
                    >
                        {task.name}
                    </span>
                    <span
                        style={{ textDecoration: task.completed ? "line-through" : "none" }}
                    >
                        {` ${task.id}`}
                    </span>
                </Checkbox>
                <Popconfirm
                    title="Are you sure you want to delete this task?"
                    onConfirm={() => deleteSelectedTask(task.id)}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="link" danger>Delete</Button>
                </Popconfirm>
            </div>

            <div style={{ marginLeft: 24 }}>
                {subTasks.map(subTask => (
                    <div key={subTask.id} style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
                        <Checkbox
                            checked={subTask.completed}
                        >
                            <div style={{ textDecoration: subTask.completed ? "line-through" : "none", fontWeight: "bold" }}>
                                {`Subtask Name: ${subTask.name}`}
                            </div>
                            <div style={{ textDecoration: subTask.completed ? "line-through" : "none", color: "#888" }}>
                                {`Details: ${subTask.details}`}
                            </div>
                        </Checkbox>
                    </div>
                ))}
                <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
                    <Input
                        placeholder="Subtask name"
                        value={newSubTask.name}
                        onChange={(e) => setNewSubTask({ ...newSubTask, name: e.target.value })}
                        style={{ marginRight: 8 }}
                    />
                    <Input
                        placeholder="Subtask details"
                        value={newSubTask.details}
                        onChange={(e) => setNewSubTask({ ...newSubTask, details: e.target.value })}
                        style={{ marginRight: 8 }}
                    />
                    <Button type="primary" onClick={handleAddSubTask}>Add Subtask</Button>
                </div>
            </div>
        </div>
    );
};
