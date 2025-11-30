import { createContext, useReducer, useContext } from "react";

const TaskContext = createContext();
const defaultTasks = [
    {
        'id': crypto.randomUUID(),
        'title': "Wireframes",
        'subTitle': "Set up high-fidelity prototypes with conditional logic",
        'tag':'',
        'dueDate':'',
        'status':'',
        'createdAt':''
:    }
]

const initialState = {
  tasks: [],
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: crypto.randomUUID(),
            title: action.payload.title,
            description: action.payload.description,
            completed: false,
          },
        ],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };

    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.data }
            : task
        ),
      };

    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  return useContext(TaskContext);
}
