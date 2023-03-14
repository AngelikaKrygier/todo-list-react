import { useEffect, useState } from "react";

export const useTasks = () => {
    const getFromlocalstorage = (key, defaultValue) => JSON.parse(localStorage.getItem(key)) ?? defaultValue

    const [tasks, setTasks] = useState(() => getFromlocalstorage("tasks", []));
    const [hideDone, setHideDone] = useState(() => getFromlocalstorage("hideDone", false))

    useEffect(() => {
        localStorage.setItem("hideDone", hideDone)
    }, [hideDone]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map
            (task => (task.id === id) ? { ...task, done: !task.done } : task)
        );
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [
            ...tasks,
            {
                content: newTaskContent,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ]);
    };

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
        toggleHideDone,
        hideDone,
    };
};

