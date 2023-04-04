import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects"
import { getExampleTasks } from "./getExamplesTasks"
import { fetchExampleTasks, setTasks } from "./tasksSlice"
import { saveTasksInLocalstorage } from "./tasksLocalStorage";
import { selectTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
    }
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalstorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
};