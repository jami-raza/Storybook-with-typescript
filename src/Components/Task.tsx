import React from 'react';
import StarIcon from "@material-ui/icons/Star";
import '../App.css'

export interface task {
    id: string,
    title: string,
    state: "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED"
}
export interface props {
    task:task
    onArchived : (id: task["id"]) => void;
    onPinned : (id: task["id"]) => void;
    onUnpinned : (id: task["id"]) => void;
}

export default function Task(props:props){
    function handleChange(task: task): void {
        if (task.state === "TASK_PINNED") {
          props.onUnpinned!(task.id);
        } else {
          props.onPinned!(task.id);
        }
      }
      return(
          <div className={`list-item${props.task.state}`}>
             <div className="checkbox_Text">
            <input type="checkbox" 
            defaultChecked={props.task.state === "TASK_ARCHIVED"}
            disabled={props.task.state === "TASK_ARCHIVED"}
            name="checked"
            onClick={()=> props.onArchived(props.task.id)}
            />
              <p
              className={props.task.state === "TASK_ARCHIVED" ? "archived" : undefined}
              >{" "}
              {!!props.task.title ? props.task.title : "No Title added"}{" "}
              </p>
              </div>
              <div onClick={(e) => e.stopPropagation()}>
                  {props.task.state !== "TASK_ARCHIVED" && (
                      <StarIcon
                      className={props.task.state !== "TASK_PINNED" ? "starUnpinned" : "starPinned"}
                      onClick={()=> {handleChange(props.task)}}
                        />
                        
                  )}

              </div>
          </div>
      )
}