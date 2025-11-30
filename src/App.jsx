import { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import TaskBoard from "./Task/TaskBoard";
import { defaultTasks } from "./data";
function App() {
  const [showAddTask, setShowAddTask]= useState(false);
  const [tasks, setTasks]= useState([...defaultTasks]);
  return (
    <>
        <div className="min-h-screen flex flex-col lg:flex-row">
          <Sidebar></Sidebar>
          <main className="flex-1 flex flex-col min-h-0">
            <Header setTasks={setTasks} setShowAddTask={setShowAddTask}></Header>
            <TaskBoard
              showAddTask={showAddTask}
              tasks={tasks}
            />
          </main>
        </div>
    </>
  )
}

export default App
