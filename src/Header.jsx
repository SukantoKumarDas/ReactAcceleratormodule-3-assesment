import AddTaskButton from "./Task/AddTaskButton";
import AllTaskSearch from "./Task/AllTaskSearch";

export default function Header(props) {
    return (
        <div
            className="bg-white border-b border-gray-200 px-4 py-4 sm:px-6 sm:py-6 lg:px-8"
        >
            <div
                className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            >
                <div>
                    <p
                        className="text-xs font-semibold text-blue-600 uppercase"
                    >
                        Board Overview
                    </p>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Workspace
                    </h1>
                </div>
                <div
                    className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end w-full md:w-auto"
                >
                <AllTaskSearch/>
                <AddTaskButton setShowAddTask={props.setShowAddTask}/>
                </div>
            </div>
        </div>
    );
}