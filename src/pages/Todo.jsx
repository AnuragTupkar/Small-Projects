import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function Todo() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const addTask = (e) => {
    e.preventDefault(); // Moved e.preventDefault() to the top

    if (task.trim()) {
      setList([...list, { id: nanoid(), task }]); // Add new task with nanoid
      setTask(''); // Clear the input after adding
    }
  };

  return (
    <>
      <div className="flex px-4 py-6 justify-center flex-col">
        <div className="text-center">
          <h1 className="text-center text-4xl font-bold mt-8">Todo List</h1>
          <form className="mt-20">
            <input
              className="border-2 w-96 h-14 p-4 todo rounded-md shadow"
              placeholder="Enter text"
              value={task} // Bind the input value to task state
              onChange={(e) => setTask(e.target.value)} // Update task state on change
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
              {/* Display the task text */}
              <h1 className="w-96 h-14 font-bold rounded-md pt-3 pl-4 mr-10 items-center border text-black text-lg">
                {e.task}
              </h1>
              <div>
                <input type="checkbox" />
                <button className="p-4 border-t-emerald-600 rounded-md bottom-8 hover:text-white hover:bg-black">
                  Edit
                </button>
                <button className="p-4 border-t-emerald-600 rounded-md bottom-8 hover:text-white hover:bg-black">
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
