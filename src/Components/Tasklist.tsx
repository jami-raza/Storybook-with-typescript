import React from 'react';
import Task,{task} from './Task';
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CircularProgress from "@material-ui/core/CircularProgress";


export interface props {
    loading: boolean;
    tasks: task[];
    onPinned: (id:task["id"]) => void;
    onArchived: (id:task["id"]) => void;
    onUnpinned: (id:task["id"]) => void;

}

export default function Tasklist({
    loading,
tasks,
onPinned,
onArchived,
onUnpinned,
}:props) {
    const events = {
        onPinned,
        onArchived,
        onUnpinned,
    };
    if(loading) {
        return (
            <div><CircularProgress/></div>
        )
    }
    if (tasks.length === 0) {
        return (
            <div className="emptyListWrapper">
                <CheckCircleIcon className="tickIcon"/>
            <div className="emptyListText">You have no tasks</div>
            </div>
        )
    }
    const tasksInOrder = [
        ...tasks.filter((t) => t.state === "TASK_PINNED"),
        ...tasks.filter((t) => t.state === "TASK_INBOX"),
        ...tasks.filter((t) => t.state === "TASK_ARCHIVED"),        
    ];
    return (
        <div>
            {tasksInOrder.map((task) => (
                <Task key={task.id} task={task} {...events}/>
            ))}
        </div>
    )
}