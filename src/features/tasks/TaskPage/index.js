import Container from "../../../common/Container"
import Header from "../../../common/Header"
import Section from "../../../common/Section"
import { useParams } from "react-router-dom"
import { getTaskById } from "../tasksSlice"
import { useSelector } from "react-redux"

const TaskPage = () => {

    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header
                title="Szczegóły zadania"
            />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={
                <><strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"} </>}
            />
        </Container>
    );

}
export default TaskPage