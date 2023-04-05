import { useSelector } from "react-redux"
import Container from "../../../common/Container"
import Header from "../../../common/Header"
import Section from "../../../common/Section"
import { useParams } from "react-router-dom"
import { getTaskById } from "../tasksSlice"

const TaskPage = () => {

    const {id} = useParams();
    // const task = useSelector(state => getTaskById(state.id));


        return (
            <Container>
                <Header
                    title="Szczegóły zadania"
                />
                <Section
                    title={id}
                    body={
                        <>
                            <p>sdfdsdf</p>
                        </>
                    }
                />
            </Container>
        );

}
export default TaskPage