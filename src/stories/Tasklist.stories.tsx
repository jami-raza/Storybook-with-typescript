import React from 'react';
import Tasklist from '../Components/Tasklist';
import {props} from '../Components/Tasklist'
import { Story, Meta } from "@storybook/react/types-6-0";

export default {
    component: Tasklist,
    title: "Tasklist",
    
} as Meta;

const Template: Story<props> = args => <Tasklist{...args} />;

export const Default = Template.bind({});
Default.args = {
    tasks:[
        { id: "1", title: "Task 1", state: "TASK_INBOX" },
        { id: "2", title: "Task 2", state: "TASK_INBOX" },
        { id: "3", title: "Task 3", state: "TASK_INBOX" },
        { id: "4", title: "Task 4", state: "TASK_INBOX" },
        { id: "5", title: "Task 5", state: "TASK_INBOX" },
    ]
}

export const withPinnedTask = Template.bind({});
withPinnedTask.args = {
    tasks: [
        { id: "1", title: "Task 1", state: "TASK_INBOX" },
        { id: "2", title: "Task 2", state: "TASK_INBOX" },
        { id: "3", title: "Task 3", state: "TASK_INBOX" },
        { id: "4", title: "Task 4", state: "TASK_INBOX" },
        { id: "5", title: "Task 5", state: "TASK_INBOX" },
        { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ]
}
export const WithArchivedTask = Template.bind({});
WithArchivedTask.args = {
    tasks:[
        { id: "1", title: "Task 1 (archived)", state: "TASK_ARCHIVED" },
    { id: "2", title: "Task 2", state: "TASK_INBOX" },
    { id: "3", title: "Task 3", state: "TASK_INBOX" },
    { id: "4", title: "Task 4", state: "TASK_INBOX" },
    { id: "5", title: "Task 5", state: "TASK_INBOX" },
    { id: "6", title: "Task 6", state: "TASK_INBOX" },
    ]
}
export const withArchivednPinnnedTask = Template.bind({});
withArchivednPinnnedTask.args = {
    tasks:[
        { id: "1", title: "Task 1", state: "TASK_INBOX" },
        { id: "2", title: "Task 2", state: "TASK_INBOX" },
        { id: "3", title: "Task 3", state: "TASK_INBOX" },
        { id: "4", title: "Task 4 (archived)", state: "TASK_ARCHIVED" },
        { id: "5", title: "Task 5 (pinned)", state: "TASK_PINNED" },
        { id: "6", title: "Task 6", state: "TASK_INBOX" },
    ]
}
export const Loading = Template.bind({});
Loading.args = {
    loading:true,
}
export const Empty = Template.bind({});
Empty.args = {
    loading:false,
    tasks:[]
}