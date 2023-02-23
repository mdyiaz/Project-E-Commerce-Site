import React from 'react';

const MyOrders = () => {
    return (
        <div>
            <h1 className='text-base text-slate-500 font-bold mt-7'>Order List</h1>

            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Product</th>
        <th>Subtotal</th>
        <th>Shipping Fee</th>
        <th>Total</th>
        <th>Delete Order</th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          
        </td>
        <td>Purple</td>
        <td>
          <button className="btn btn-ghost btn-xs">details</button>
        </td>

        <td>
            <button className="btn btn-outline btn-error btn-sm">Delete</button>
        </td>
      </tr>
     
      
      
      
     
     
    </tbody>
    
    
    
  </table>
</div>
        </div>
    );
};

export default MyOrders;