import { configureStore } from "@reduxjs/toolkit";
import tasksReducery from "./features/tasks/tasksSlice"
import createSagaMiddleware from "redux-saga"
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

