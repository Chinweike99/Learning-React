import { useForm } from 'react-hook-form';
import './style.css';
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"


export const Form = () => {
    
    const schema = yup.object().shape({
        fullName: yup.string().required("Your full name is required."),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null])
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) =>{
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <input type="text" placeholder="Full Name" {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age..." {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password" {...register("password")}/>
            <input type="password" placeholder="Confirm Password" {...register("confirmPassword")}/><br/>          
            <input className='submit' type="submit" />
        </form>
    )
}
