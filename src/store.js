import { configureStore } from "@reduxjs/toolkit";
import tasksReducery from "../src/features/tasks/tasksSlice"
import createSagaMiddleware from "redux-saga"
import { watchFetchExampleTasks } from "./features/tasks/TasksList/tasksSaga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: tasksReducery,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;

