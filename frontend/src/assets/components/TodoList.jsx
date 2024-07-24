import { RiDeleteBin6Line } from "react-icons/ri";
import { MdEditSquare } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";



function TodoList({todos}){
    const lists = [
        'Write a todo app',
        'Write a article about building a todo app', 
        'Publish the article'
    ]
    return(

        <>
         <ol className="  m-auto w-1/4 mt-4 flex flex-col gap-3">
            {
                
                lists.map((task, key) =>{
                    return(
                        <li key={key} className=" border-2 border-green-600 w-full flex flex-row items-center justify-between p-3 text-white bg-black  "> <p className=" flex items-center gap-3"><FaCheckCircle className=" text-green-600"/> {task}</p> <span className=" flex flex-row gap-4"><RiDeleteBin6Line/> <MdEditSquare/></span></li>

                    )
                }) 

            }
            
        </ol>
        <p>Seems lonely in here, what are you up to?</p>
        </>
       
        
    )
}
export default TodoList