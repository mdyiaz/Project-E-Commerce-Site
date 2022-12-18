import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/login.png';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {

    // step_2: useForm theke eigual niye nite hobe___________________________________________________
    const {register, formState: { errors }, handleSubmit}  = useForm();


    // authcontext theke signIn ta ke niye nite hobe___________________________________________
    const {signIn} = useContext(AuthContext);


    // user bhul password dile setar jonno amra ekta error dekhabo ar tai eikhane ekta usestate use korte hobe_____
    const [loginError, setLoginError] = useState('');





    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';




    // step_3: handleLogin ta eikhane  declare korte hobe___________and go to the firebase___ tarpor seikhane ja kaj kora lagbe seigula kore felte hobe__________________________________________________________________________________tarpor arekta folder banaya felte hobe_____ firebase name diye__________________________________________
    const handleLogin = data => {
          setLoginError('');
          signIn(data.email, data.password)
          .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
          })
          .catch(error => {
            
            console.error(error.message)
            setLoginError(error.message);
          });
    }





    return (
        <div>
             
              {/* LOGIN HEADER START_____________________________________________________________________ */}
                  <h1 className="text-5xl font-bold text-center text-slate-700 mb-20 mt-5">Login now !</h1>
              {/* LOGIN HEADER END_____________________________________________________________________ */}



            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>

                    <div className=''>
                        <img src={login} alt="" className='w-96 h-96' />
                    </div>


                    <div>
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


     
     
      
<button className="btn btn-active btn-primary w-full max-w-xs" type='submit'>Login !</button>

<div>
  
</div>


{/* login korar somoy bhul kisu dile sheii error msg ta eikhane dekhabe______ */}
{loginError && <p className='text-red-500'>{loginError}</p>}

    </form>


{/* LOGIN FORM END_________________________________________________________________________________ */}

<p className='mt-2'>Don't Have an Account_? <Link to='/register' className='text-orange-700'> Sign Up</Link></p>

                    </div>

            </div>




        </div>
    );
};

export default Login;