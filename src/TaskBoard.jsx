import AddTask from "./AddTask";
import TaskColumn from "./TaskColumn";

export default function TaskBoard({showAddTask, SetShowAddTask}) {
    return (
        <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
            <div className="flex flex-col gap-6 xl:flex-row h-full">
                {/* <!-- Todo Column --> */}
                {/* <!-- In Progress Column --> */}
                {/* <!-- Done Column --> */}
                { showAddTask ? <AddTask/> :
                <>
                    <TaskColumn type={"To-do"}/>
                    <TaskColumn type={"In Progress"}/>
                    <TaskColumn type={"Done"}/>
                </>}
            </div>
        </div>
    );
}