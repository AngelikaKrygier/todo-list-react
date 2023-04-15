import { takeLatest, call, put, takeEvery, select, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExamplesTasks";
import { fetchExampleTasks, fetchExampleTasksError, fetchExampleTasksSuccess } from "./tasksSlice";
import { saveTasksInLocalstorage } from "./tasksLocalStorage";
import { selectTasksState } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch (error) {
        yield put(fetchExampleTasksError())
        yield call(alert, "Coś poszło nie tak");
    };
};

function* saveTasksInLocalStorageHandler() {
    const { tasks } = yield select(selectTasksState);
    yield call(saveTasksInLocalstorage, tasks);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};