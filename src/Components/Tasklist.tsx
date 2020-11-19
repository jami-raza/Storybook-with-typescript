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
Tasklist.defaultProps = {
    tasks: [
        { id: "1", title: "Task 1", state: "TASK_INBOX" },

        { id: "2", title: "Task 2", state: "TASK_INBOX" },
    
        { id: "3", title: "Task 3", state: "TASK_INBOX" },
    
        { id: "4", title: "Task 4", state: "TASK_INBOX" },
    
        { id: "5", title: "Task 5", state: "TASK_INBOX" },
    
        { id: "6", title: "Task 6", state: "TASK_INBOX" },
    ],
    loading: false,
    onArchived: () => {
        console.log("task archived")
    },
    onPinned:() => {
        console.log("task Pinned")
    },
    onUnpinned:() => {
        console.log("task unpinned")
    },
};