import { configureStore } from "@reduxjs/toolkit";
import tasksReducery from "./features/tasks/TasksPage/tasksSlice"
import createSagaMiddleware from "redux-saga"
import { tasksSaga } from "./features/tasks/TasksPage/tasksSaga";
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

