import { useForm } from "react-hook-form";
import axios from 'axios';
import "./Login.css";

const Login = () => {
 const { handleSubmit, register, formState: { errors } } = useForm();
 const onSubmit = async (values)=>{
  try{
    const response = await axios.post('http://localhost:3000/login', values)
    alert(response.data.message);
  } catch (error) {
    alert('Login failed. Please check your credentials.');
    console.error(error);
  }
 };

 return (
   <div className="login">
     <form onSubmit={handleSubmit(onSubmit)} id="u">
       <h3 id="r">LOGIN</h3>
       <div className="formInput">
         <label><b>Email</b></label><br/>
         <input
           type="email"
           {...register("email", {
             required: "Required",
             pattern: {
               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
               alert: "invalid email address"
             }
           })}
         />
         {errors.email && errors.email.message}
       </div>
       <div className="formInput">
         <label><b>Password</b></label><br/>
         <input
           type="password"
           {...register("password", {
             required: "Required",
             pattern: {
               value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
               alert: "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."
             }
           })}
         />
         {errors.password && errors.password.message}

         
       </div><br/>
       <button type="submit" id="b">Submit</button>
     </form>
   </div>
 );
};


export default Login;