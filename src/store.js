import { configureStore } from "@reduxjs/toolkit";
import tasksReducery from "../src/features/tasks/tasksSlice"
import createSagaMiddleware from "redux-saga"
import { watchFetchExampleTasks } from "./features/tasks/TasksList/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducery,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(watchFetchExampleTasks);

export default store;

