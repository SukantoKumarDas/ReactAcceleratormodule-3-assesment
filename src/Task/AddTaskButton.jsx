import React from 'react'

export default function AddTaskButton({setShowAddTask}) {
    function handleClick() {
        setShowAddTask(true);
    }
    return (
        <button
            className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
            onClick={()=>handleClick()}
        >
            + Add Task
        </button>
    )
}
