import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import FetchExampleTaskButton from "./FetchExampleTaskButton";

function TasksPage() {
  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form />
        }
        extraHeaderContent={
          <FetchExampleTaskButton
          />}
      />
        <Section
        title="Wyszukiwarka"
        body={
          <Search />
        }
      />
      <Section
        title="Lista zadań"
        body={
          <TasksList
          />
        }
        extraHeaderContent={
          <Buttons
          />
        }
      />
    </Container>
  );
};

export default TasksPage;
