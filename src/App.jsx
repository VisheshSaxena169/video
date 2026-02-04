import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(
  JSON.parse(localStorage.getItem("todos")) || []);
   const [showFinished, setshowFinished] = useState()
   const toggleFinished =(e) => {
     setshowFinished(!showFinished)
   }
   

  useEffect(() => {
      let todoString=localStorage.getItem("todos");
      if(todoString)
    {
      let todos=JSON.parse(localStorage.getItem("todos"))
      setTodos(todos);
    }
  }, [])

 useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);

  
  


  

  const handleEdit=(e,id)=>{
    let t=todos.filter(i=>i.id===id)

    setTodo(t[0].todo)
    let newTodos=[...todos]
    let index=newTodos.findIndex((item)=>{
    return item.id===id;
    })
    setTodos(newTodos.filter((_,i)=>i!==index
    ))

 
   
  }
   
  const handleAdd=()=>{
    setTodos([...todos,{id:uuidv4(),todo,isCompleted:false}])
    console.log(todos)
    setTodo("");

   
    
   }


  const handleDelete=(e)=>{
    let id=e.target.name;
     let newTodos=[...todos]
     let index=newTodos.findIndex((item)=>{
      return item.id===id;
    })
     setTodos(newTodos.filter((_,i)=>i!==index
    ))
   
    
  }


  const handleChange=(e)=>{
       setTodo(e.target.value)
       console.log(e)
  }

  const handleCheckbox=(e)=>{
   let id=e.target.name
   console.log(`the id is ${id}`);
   let index=todos.findIndex(item=>{
    return item.id===id;
   })
   console.log(`this is index ${index}`)
   let newTodos=[...todos]
   newTodos[index].isCompleted=!newTodos[index].isCompleted
   setTodos(newTodos)
   
  
  }


  return (
    <>
    <Navbar/>
    
    <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 ">
      <h1 className='font-bold text-center text-xl'>iTask-Manage your todos at one place</h1>
      <div className="addtodo my-5  "><h1></h1>
     <h2 className='text-lg font-bold'>Add a Todo</h2>
     <div className='flex'>
      <input name={todo.id} onChange={handleChange} value={todo} type="text "className='w-full rounded-xl ' />
     <button onClick={handleAdd} disabled={todo.length<3} className='bg-violet-800 hover:bg-violet-900 p-3  py-1 text-white rounded-xl mx-6 font-bold disabled:bg-violet-500'>Save</button>
      </div></div>

      <input onChange={toggleFinished} type="checkbox" checked={showFinished} /> Show Finished
      <h2 className='text-lg font-bold'>Your Todo</h2>
      <div className="todos ">
        {todos.length===0 && <div className='font-bold text-xl py-4'> No Todo to Display</div>}
        {todos.map((item)=>{

      
        return (showFinished || !item.isCompleted) && <div key={item.id} className="todo flex justify-between mb-2">
         
            <div className='flex gap-7'>
              <input onChange={handleCheckbox} type="checkbox"  checked={item.isCompleted} name={item.id}/>
          <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
          
            </div>
          <div className="buttons flex h-full">
            <button onClick={(e)=>handleEdit(e,item.id)}  name={item.id} className='bg-violet-800 hover:bg-violet-900 p-3  py-1 text-white rounded-md mx-1 font-bold'>Edit</button>
            <button onClick={handleDelete}  name={item.id}  className='bg-violet-800 hover:bg-violet-900 p-3  py-1 text-white rounded-md mx-1 font-bold'>Delete</button>
          </div>

        </div>
        })}
      </div>
      </div>
    </>
  )
}

export default App
