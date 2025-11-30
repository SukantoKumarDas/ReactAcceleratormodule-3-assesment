import { useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import TaskBoard from "./TaskBoard"

function App() {
  const [showAddTask, SetShowAddTask]= useState(true);
  return (
    <>
        <div className="min-h-screen flex flex-col lg:flex-row">
          <Sidebar></Sidebar>
          <main className="flex-1 flex flex-col min-h-0">
            <Header></Header>
            <TaskBoard
              showAddTask={showAddTask}
              SetShowAddTask={SetShowAddTask}
            />
          </main>
        </div>
    </>
  )
}

export default App
