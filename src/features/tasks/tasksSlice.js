import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone
        },
        toggleTaskDone: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(task => task.id === taskID);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskID }) => {
            const index = tasks.findIndex(task => task.id === taskID);
            tasks.splice(index, 1)
        },
        setAllDone: ({ tasks }) => {
            for (const task of tasks) {
                task.done = true;
            }
        },
        fetchExampleTasks: () => {},
            setTasks: (state, { payload: tasks }) => {
                state.tasks = tasks;
            },
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks
} = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;