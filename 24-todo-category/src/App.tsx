import React, { ReactElement, ReactNode, useState } from 'react'
import { nanoid } from 'nanoid'

function App(): ReactElement {
  const [tasks, setTasks] = useState<TaskList>({
    todo: [
      {
        id: nanoid(),
        title: 'task1',
        category: 'todo',
      },
    ],
    process: [
      {
        id: nanoid(),
        title: 'task1',
        category: 'process',
      },
    ],
    completed: [
      {
        id: nanoid(),
        title: 'task1',
        category: 'completed',
      },
    ],
  });

  const categories: string[] = React.useMemo(() => {
    return Object.keys(tasks)
  }, [tasks])

  const taskHandler = (payload: Task) => {
    setTasks(prev => ({ ...prev, [payload.category]: [...prev[payload.category], payload] }))
  }

  const taskIdHandler = (id: string) => {
    let editableData
    for (const key in tasks) {
      editableData = tasks[key].find(task => task.id === id);
      if(editableData){
        break
      }
    }
    console.log(editableData)
  }

  return (
    <>
      <FormElement taskHandler={taskHandler}/>
      <br></br>
      <div style={{ display: 'flex', justifyContent: "space-around", textAlign: "center", width: "500px" }}>
        {categories?.map((category: string, index: number) => (
          <TaskList key={index} name={category}>
            {tasks[category]?.map((task) => (
              <TaskCard key={task.id} task={task} taskIdHandler={taskIdHandler} />
            ))}
          </TaskList>
        ))}
      </div>
    </>

  )
}

export default App


function FormElement({ taskHandler }: any): ReactElement {
  const [titleValue, setTitleValue] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState<string>("todo");

  const options = [
    { label: "Todo", value: "todo" },
    { label: "Process", value: "process" },
    { label: "Completed", value: "completed" }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      id: nanoid(),
      title: titleValue || '',
      category: selectedOption || 'todo',
    }
    taskHandler(payload)
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <button type="submit">add</button>
    </form>
  );
}



function TaskList({ name, children }: { name: string, children: ReactNode }): ReactElement {
  return (
    <div>
      {name}
      {children}
    </div>
  )
}


function TaskCard({ task, taskIdHandler }: { task: Task, taskIdHandler: any }): ReactElement {
  const idHandler = () => {
    taskIdHandler(task.id)
  }
  return (
    <div>
      <p>{task.title}</p>
      <button onClick={idHandler}>edit</button>
    </div>
  )
}



type TaskList = Record<string, Task[]>;

type Category = "todo" | "process" | "completed";

interface Task {
  id: string;
  title: string;
  category: Category;
}
