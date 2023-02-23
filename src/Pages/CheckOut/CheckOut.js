import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const {user} = useContext(AuthContext);
    const checkOut = useLoaderData();
    const {register, formState:{errors}, handleSubmit} = useForm()
    console.log(checkOut);

    // let shippingCharge = 4.34;
    // let a = checkOut.price
    // let checkOutPrice= a.toFixed(2)
    // let totalPrice = shippingCharge + checkOutPrice;

   
    return (


<div className='font-serif mx-5'>
    <form className='grid lg:grid-cols-2 sm:grid-cols-1 mb-5 gap-10'>
        <div>

        <h1 className=' font-bold text-lg mb-1 mt-5'>Billing Details</h1>

        <div className="form-control w-full ">
         <label className="label">
             <span className="label-text">FirstName</span>
         </label>                   
         <input type="text" {...register ('firstname', {required: 'FirstName is required'})} placeholder="Enter Your FirstName" className="input bg-slate-100 w-full " />

         {errors.firstname &&  <p className='text-red-500'>{errors.firstname?.message}</p>  }
     </div>

     <div className="form-control w-full ">
         <label className="label">
             <span className="label-text">LastName</span>
         </label>                   
         <input type="text" {...register ('lastname', {required: 'LastName is required'})} placeholder="Enter Your LastName" className="input w-full bg-slate-100" />

         {errors.lastname &&  <p className='text-red-500'>{errors.lastname?.message}</p>  }
     </div>

     <div className="form-control w-full ">
         <label className="label">
             <span className="label-text">Country / Region</span>
         </label>                   
         <input type="text" {...register ('country', {required: 'Country is required'})} placeholder="Country" className="input w-full bg-slate-100" />

         {errors.country &&  <p className='text-red-500'>{errors.country?.message}</p>  }
     </div>


     <div className="form-control w-full">
         <label className="label">
             <span className="label-text">Street Address</span>
         </label>                   
         <input type="text" {...register ('street', {required: 'Street name is required'})} placeholder="Street" className="input w-full bg-slate-100" />

         {errors.street &&  <p className='text-red-500'>{errors.street?.message}</p>  }
     </div>


     <div className="form-control w-full ">
         <label className="label">
             <span className="label-text">Town / City</span>
         </label>                   
         <input type="text" {...register ('town', {required: 'Town name is required'})} placeholder="Town" className="input w-full bg-slate-100" />

         {errors.town &&  <p className='text-red-500'>{errors.town?.message}</p>  }
     </div>


     <div className="form-control w-full ">
         <label className="label">
             <span className="label-text">Zip Code</span>
         </label>                   
         <input type="text" {...register ('zipcode', {required: 'Zip Code is required'})} placeholder="Zip Code" className="input w-full bg-slate-100" />

         {errors.zipcode &&  <p className='text-red-500'>{errors.zipcode?.message}</p>  }
     </div>


     <div className="form-control w-full ">
         <label className="label">
             <span className="label-text">Phone Number</span>
         </label>                   
         <input type="number" {...register ('phone', {required: 'Phone Number is required'})} placeholder="Phone Number" className="input w-full bg-slate-100" />

         {errors.phone &&  <p className='text-red-500'>{errors.phone?.message}</p>  }
     </div>


     <div className="form-control w-full ">
         <label className="label">
             <span className="label-text">Email</span>
         </label>                   
         {/* <input type="email" {...register ('email', {required: 'Email is required'})} placeholder="Email" className="input w-full bg-slate-100" />

         {errors.email &&  <p className='text-red-500'>{errors.email?.message}</p>  } */}

<input type="email"  defaultValue={user?.email} disabled placeholder="Email" className="input w-full bg-slate-100" />

         
     </div>


     <div className="form-control w-full ">
         <label className="label">
             <span className="label-text">Order Notes (Optional) </span>
         </label>                   
         <input type="text" {...register ('ordernotes')} placeholder="Order Notes" className="input w-full bg-slate-100" />

         {errors.ordernotes &&  <p className='text-red-500'>{errors.ordernotes?.message}</p>  }
     </div>

        </div>


{/* second column_______________________________________ */}
        <div>


        <h1 className=' font-bold text-lg mb-5 mt-5'>Your Order</h1>
    <hr />

    <div className='grid grid-cols-2'>
        <div>
            <p className='text-sm text-slate-500 mt-3 mb-2'>Product</p>
            <hr />
            <p className='text-sm mt-3 mb-2'>{checkOut.name}</p>
            <hr />
            <p className='mt-3 mb-2 text-sm font-bold text-slate-500' >Shipping Charge:</p>
            <hr />
            <p className='mt-3 mb-2 text-sm font-bold text-slate-500'>Total:</p>
           <Link to={`${checkOut._id}`}> <button className='mt-3 mb-2 text-sm font-bold text-white rounded-sm btn-xs btn-primary'>Submit</button></Link>
        </div>
        <div>
            <p className='text-sm text-slate-500 mt-3 mb-2'>Subtotal:</p>
            <hr />
            <p className='mt-3 mb-1'>{checkOut.price}</p>
            <hr />
            <p className='mt-3 mb-1'>4.34</p>
            {/* <p>Total: {totalPrice}</p> */}
            <p>{checkOut.price + 4.34}</p>
            <hr />
            

        </div>
    </div>

        </div>
    </form>
</div>


    );
};

export default CheckOut;