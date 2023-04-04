import {all} from "redux=saga/efffects";
import { watchFetchExampleTasks } from "./tasksSaga";

export default function* rootSaga() {
    yield all([
        watchFetchExampleTasks(),
    ])
}