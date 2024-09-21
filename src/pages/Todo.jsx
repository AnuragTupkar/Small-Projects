import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function Todo() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);
  const [check, setCheck] = useState("bg-blue-500")
  const addTask = (e) => {
    e.preventDefault(); 

    if (task.trim()) {
      setList([...list, { id: nanoid(), task }]); 
      setTask(''); 
    }
  };
  const deleteTask = (id)=>{
    let updatedList = list.filter((e)=> e.id != id)
    setList(updatedList)
  }

  const completedTask = (id)=>{
    let taskStatus = check == "bg-blue-500" ? "" : "bg-blue-500"
    // taskStatus = taskStatus.filter((e)=>e.id != id)
    setCheck(taskStatus);
  }
  return (
    <>
      <div className="flex px-4 py-6 justify-center flex-col">
        <div className="text-center">
          <h1 className="text-center text-4xl font-bold mt-8">Todo List</h1>
          <form className="mt-20">
            <input
              className="border-2 w-96 h-14 p-4 todo rounded-md shadow"
              placeholder="Enter text"
              value={task} 
              onChange={(e) => setTask(e.target.value)}
            />
            <button
              className="p-4 border-t-emerald-600 border rounded-lg bottom-8 hover:text-white hover:bg-black mx-8 w-32"
              onClick={addTask}
            >
              Add
            </button>
          </form>
        </div>

        <div className="list">
          {list.map((e) => (
            
            <div key={e.id} className="toDoList flex justify-center p-2">
              <h1 className={`w-96 h-14 font-bold rounded-md pt-3 pl-4 mr-10 items-center border  ${check} text-lg`}>
                {e.task}
              </h1>
              <div>
                <input type="checkbox" onClick={()=> completedTask(e.id)} />
                <button className="p-4 border-t-emerald-600 rounded-md bottom-8 hover:text-white hover:bg-black">
                  Edit
                </button>
                <button onClick={()=>deleteTask(e.id)} className="p-4 border-t-emerald-600 rounded-md bottom-8 hover:text-white hover:bg-black">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
