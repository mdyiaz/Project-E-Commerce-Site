import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    // step_2: useForm theke eigual niye nite hobe___________________________________________________
    const {register, formState: { errors }, handleSubmit}  = useForm




    // step_3: handleLogin ta eikhane  declare korte hobe___________and go to the firebase___ tarpor seikhane ja kaj kora lagbe seigula kore felte hobe__________________________________________________________________________________tarpor arekta folder banaya felte hobe_____ firebase name diye__________________________________________
    const handleLogin = data => {
        console.log(data);
    }





    return (
        <div>
             
         {/* LOGIN HEADER START_____________________________________________________________________ */}
              <h1 className="text-5xl font-bold text-center text-slate-700">Login now !</h1>
        {/* LOGIN HEADER END_____________________________________________________________________ */}




{/* step_1: form ta ke eikhane bosaite hobe_____ */}
{/* LOGIN FORM START_________________________________________________________________________________ */}


<form onSubmit={handleSubmit(handleLogin)}>
      



      <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
  </label>
 
  <input type="email" {...register("email", {required: "Email address is required"})} placeholder="Enter email" className="input input-bordered w-full max-w-xs" />
  {errors.email && <p className='text-red-500' role="alert"> {errors.email?.message}</p>}
</div>



<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Password</span>
  </label>
 
  <input type="password" {...register("password", {required: "Password is required",
  minLength: { value: 6, message: "password must be 6 characters long" }
})} placeholder="Enter email" className="input input-bordered w-full max-w-xs" />
  {errors.password && <p className='text-red-500' role="alert"> {errors.password?.message}</p>}
  <label className="label">
    <span className="label-text">Forget Password</span>
  </label>
</div>


     
     
      
<button className="btn btn-active btn-primary w-full" type='submit'>Login !</button>

<div>
  {/* {loginError && <p className='text-red-500'>{loginError}</p>} */}
</div>

    </form>


{/* LOGIN FORM END_________________________________________________________________________________ */}

        </div>
    );
};

export default Login;