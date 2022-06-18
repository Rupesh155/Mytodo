import { Toast } from 'bootstrap';
import React, { useState ,useEffect } from 'react';
import './App.css'

const getLocalItem =()=>{
    let list = localStorage.getItem('lists')
    console.log(list);
    if(list){
        return JSON.parse(list)
    }else{
        return [];
    }
}
function App() {
    const [text, setText] = useState()
    const [task, setTask] = useState(getLocalItem())


    const changeText = (e) => {
        // console.log(e);
        setText(e.target.value)
    }
    const submitHandler = (e) => {
        console.log("submited");
        e.preventDefault();
        setTask([text,...task, ])

        setText("")
    }
    const removeTask =(a)=>{
        const finalData = task.filter((curEle,index)=>{
            return index !== a;
        })

        setTask(finalData)
    }
    const clearAll=()=>
    {
        setTask([])
        // setTasks([]);
        // localStorage.removeItem("lists");
      
    }
   
    const markAs=(index)=>{
        var newindex=task.length-1
        
      
        console.log(task[index],task[newindex],"before")
        var temp=task[newindex];
        task[newindex]=task[index];
        task[index]=temp;
        
        console.log(task[index],task[newindex],"after")
        console.log(task,"task")
        setTask([...task])
        // console.log( task[newindex])

        // const nearr=task.filter((data,index)=>{
         
        //     var newindex=task.length-1
        //     if(index<newindex)
        //     {

        //         var temp=newindex;
        //         newindex=index;
        //         index=temp
        //         // setTask()
        //         return ([task])
        //     }
        //     else{
        //         return ([text,...task])
        //     }
           
        // })
        // setTask(nearr)
    

        
        
        // setTask(newArr)
    }

    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(task))
    },[task])
    return <>
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Todo App Using React JS</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" type="text" className="form-control" value={text}  placeholder="Enter item" onChange={changeText} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add todo</button>
                        </div>
                        
                    </form>

                    <div className="container">
                        <div className="row">
                            {
                                task.map((value,index) => {
                                    
                                    return (
                                        <>
                                            <div className="col-6 my-2" key={index}>  {value} </div>
                                            <div className="col-6 my-2"><button onClick={()=>markAs(index)}> mark as </button></div>
                                {/* <button onClick={()=>removeTask(index)}>delet </button> */}
                                        </>
                                    );
                                })
                            }
                            <button onClick={()=>{clearAll(  console.log("clear"))}} className="btn btn-primary mb-2 ml-2 col-3">clear All</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default App;
