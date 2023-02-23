import React from 'react';
import { Link } from 'react-router-dom';

const AllCategory1 = () => {


    return (
        <div className='mt-10 grid lg:grid-cols-4 sm:grid-cols-1 gap-2 mx-20'>
                <Link to="/baverages"><div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/kKxw4D6/baverages-1.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm font-serif font-bold ">Baverages</h2>
                       
                        <div className="card-actions justify-end">
                            <button className="btn btn-info btn-xs text-white">HighLife</button>
                        </div>
                    </div>
                </div></Link>



               
                <Link to="/biscuitssnakes">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/DC1sbp4/Biscuits-Snakes.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm font-serif font-bold">Biscuits & Snacks</h2>
                       
                        <div className="card-actions justify-end">
                            <button className="btn btn-info btn-xs text-white">HighLife</button>
                        </div>
                    </div>
                </div>
                </Link>



                <Link to="/breadsbakery"><div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/ZWyt8m0/Breades-Bakery.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm font-serif font-bold">Breads & Bakery</h2>
                       
                        <div className="card-actions justify-end">
                            <button className="btn btn-info btn-xs text-white">HighLife</button>
                        </div>
                    </div>
                </div></Link>



                <Link to="/breakfastdairy"><div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/k12wGSM/Breakfast-Bakery.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm font-serif font-bold">Breakfast & Dairy</h2>
                       
                        <div className="card-actions justify-end">
                            <button className="btn btn-info btn-xs text-white">HighLife</button>
                        </div>
                    </div>
                </div></Link>




               <Link to="/foodsfrozen"> <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/2WDsNXP/Haagen-Dazs-Caramel-Cone-Ice-Cream.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm font-serif font-bold">Frozen Foods</h2>
                       
                        <div className="card-actions justify-end">
                            <button className="btn btn-info btn-xs text-white">HighLife</button>
                        </div>
                    </div>
                </div></Link>



                <Link to="/fruitsvegetables"><div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/CHmpLDs/Fruits-Vegetables.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm font-serif font-bold">Fruits & Vegetables</h2>
                       
                        <div className="card-actions justify-end">
                            <button className="btn btn-info btn-xs text-white">HighLife</button>
                        </div>
                    </div>
                </div></Link>




               <Link to="/grocerystaples"> <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/Sf4tcRK/Grocery.png" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm font-serif font-bold">Grocery & Staples</h2>
                       
                        <div className="card-actions justify-end">
                            <button className="btn btn-info btn-xs text-white">HighLife</button>
                        </div>
                    </div>
                </div></Link>




                <Link to="/meatsseafood">
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/VLNBY5Q/Meets-Seafoods.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title text-sm font-serif font-bold">Meats & Seafood</h2>
                       
                        <div className="card-actions justify-end">
                            <button className="btn btn-info btn-xs text-white">HighLife</button>
                        </div>
                    </div>
                </div></Link>


        </div>
    );
};

export default AllCategory1;