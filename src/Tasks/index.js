import "./style.css";

const Tasks = ({ tasks, hideDoneTasks }) => (
    <ul className="tasksList">
        {tasks.map(task => (
            <li
                className={`tasksList__item 
                    ${task.done && hideDoneTasks
                        ? "tasksList__item--hidden"
                        : ""}`}
            >
                <button className="tasksList__button tasksList__button--toogleDone">
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasksList__content  
                    ${task.done
                        ? "tasksList__content--done"
                        : ""}`}>
                    {task.content}
                </span>
                <button className="tasksList__button tasksList__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;