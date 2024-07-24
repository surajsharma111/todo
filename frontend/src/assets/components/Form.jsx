import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { validationSchema } from "../ValidationSchema/FormSchema";






function Form(){

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(validationSchema)
      })
      

      
    return(
        <form onSubmit={handleSubmit} className=" w-1/4 m-auto mt-4  flex items-center justify-center">
            <input {...register('task')} type="text" className=" border-black w-10/12 bg-gray-800 p-1 rounded-lg text-white" placeholder="write your next task" />
            {errors.task?.meaasge && <span className=" text-sm text-red-600">{errors.task.message}</span>}
            <input className=" border-black  ml-4 w-6 h-full text-xl bg-green-500 rounded-md" disabled={!watch('task')} type="submit" value={'+'}  />
            
        </form>

    )
}
export default Form