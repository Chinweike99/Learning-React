import './style.css';
import { useForm } from 'react-hook-form';


export const Form = () => {
    return (
        <form className="form">
            <input type="text" placeholder="Full Name"/>
            <input type="text" placeholder="Email..."/>
            <input type="text" placeholder="Age..."/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/><br/>          
            <input className='submit' type="submit" />
        </form>
    )
}