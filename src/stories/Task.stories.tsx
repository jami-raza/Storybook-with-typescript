import React from 'react';
import Task, { props } from '../Components/Task';
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
    component: Task,
    title: "Task",
    args: {
        task: { id: "1", title: "New Task", state: "TASK_INBOX" },
        onArchiveTask: () => {
          console.log("task archived");
        },
        onPinTask: () => {
          console.log("task pinned");
        },
        onUnpinTask: () => {
          console.log("task unpinned");
        },
      },
    } as Meta;




const Template:Story<props> = args => <Task {...args}/>

export const Default = Template.bind({});

Default.args = {
    task:{
        id: "1",
        title:"Test Task",
        state: "TASK_INBOX",
        
    }
}
export const Pinned = Template.bind({});
Pinned.args = {
    task:{
        id:"1",title:"Test Task",
        state: 'TASK_PINNED',
    }
}
export const Archived = Template.bind({})
Archived.args = {
    task:{
        id:"1",title:"Test archive",
        state:"TASK_ARCHIVED"
    }
}