import AddTask from "./AddTask";
import TaskColumn from "./TaskColumn";

export default function TaskBoard({showAddTask, SetShowAddTask, tasks}) {
    const toDoList=tasks.filter(task=>task.status==="To-do");
    console.log(toDoList);
    const inProgressList=tasks.filter(task=>task.status==="In Progress");
    const doneList=tasks.filter(task=>task.status==="Done");
    return (
        <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
            <div className="flex flex-col gap-6 xl:flex-row h-full">
                {/* <!-- Todo Column --> */}
                {/* <!-- In Progress Column --> */}
                {/* <!-- Done Column --> */}
                { showAddTask ? <AddTask/> :
                <>
                    <TaskColumn type={"To-do"} tasks={toDoList}/>
                    <TaskColumn type={"In Progress"} tasks={inProgressList}/>
                    <TaskColumn type={"Done"} tasks={doneList}/>
                </>}
            </div>
        </div>
    );
}