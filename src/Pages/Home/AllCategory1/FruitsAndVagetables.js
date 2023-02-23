// import React from 'react';

// const FruitsAndVagetables = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default FruitsAndVagetables;




import React from 'react';
import { useQuery } from 'react-query';
import {AiOutlineDown} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {CgMenuGridO} from 'react-icons/cg'
import {CgMenuGridR} from 'react-icons/cg'
import {CgMenuRound} from 'react-icons/cg'

import {AiFillStar, AiOutlineStar} from 'react-icons/ai'


const FruitsAndVagetables = () => {

   



 const {data:fruitsvegetables = [] } = useQuery({
    queryKey:['fruitsvegetables'],
    queryFn: async () => {
        const res = await fetch('https://e-commerce-server-site.vercel.app/allproducts/Fruits_Vagetables')
        const data = await res.json();
        return data;
    }
 })


    return (
        <div className='px-12'>


            <div className='flex gap-16'>

                {/* left columns START______________________________________________________________ */}

                <div className='grow-0 w-96 lg:block hidden'>
                   <div className='flex gap-3 mt-3'>
                        <p>Home</p>
                        <p>Baverages</p>
                   </div>

                   <div>
                        <h1 className='text-sm font-serif font-bold mt-10 mb-4'>PRODUCTS STATUS</h1>

                        <div className='flex gap-4 mb-3 mt-4'>
                            <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>In Stock</p>                         
                        </div>

                        <div className='flex gap-4 mb-10'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>On Sale</p>                         
                        </div>
                   </div>

                   <div>
                        <h1  className='text-sm font-serif font-bold mt-10 mb-4'>BRANDS</h1>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Frito Lay</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Nespresso</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Oreo</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Quaker</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Welch's</p>
                        </div>
                   </div>


                   <div>
                        <h1 className='text-sm font-serif font-bold mt-10 mb-4'>FILTER BY PRICE</h1>
                       <input type="range" name="" id="" className='w-full' />
                       <div className='flex justify-between text-xs'>
                            <p>Price: <span className='font-bold'>$0--$500</span></p>
                            <p className='font-bold'>Filter</p>
                       </div>
                        
                   </div>

                   <div>
                        <h1  className='text-sm font-serif font-bold mt-10 mb-4'>PRODUCTS CATEGORIES</h1>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Coffee</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Craft Beer</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Drink Boxes & Pouches</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Milk & Plant-Based Milk</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Soda & Pop</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Spakling Water</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Tea & Kombocha</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Water</p>
                        </div>

                        <div className='flex gap-4 mb-5'>
                             <input type="radio" name="" id="" />
                            <p className='text-slate-600 text-sm'>Red Wine</p>
                        </div>
                   </div>

                   <img src="https://i.ibb.co/swBcrBB/sidebar-banner.gif" alt="" className='rounded-lg' />
                  
                   <div>
                <div className="carousel w-full mt-3">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/H2F5XdF/banner-box.jpg" alt='' className="w-full rounded-lg" />
                        
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-16">
                            <h1 className='text-lg text-white font-semibold'>HighLifE Natural Foods</h1>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-28">
                            <h1 className='text-3xl font-extralight'>Special Organic</h1>
                        </div>


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-40">
                            <h1 className='text-3xl font-bold'>Roats Burger</h1>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-52">
                           <p>Only from</p>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-60">
                           <p className='text-4xl text-red-600 font-bold'>$14.99</p>
                        </div>
                    </div> 
                </div>

                <div className="carousel w-full mt-3">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/XVGDC5p/bacola-banner-04.jpg" alt='' className="w-full rounded-lg" />
                        
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-16">
                            <h1 className='text-lg text-slate-500 font-semibold'>HighLifE Best Bakery Products</h1>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-28">
                            <h1 className='text-3xl font-extralight'>Freshest Products</h1>
                        </div>


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-40">
                            <h1 className='text-3xl font-bold'>HighLife Toast</h1>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-52">
                           <p>Only from</p>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-60">
                           <p className='text-4xl text-red-600 font-bold'>$9.99</p>
                        </div>
                    </div> 
                </div>
            </div>
                </div>


                {/* left column END___________________________________________________________________ */}




                <div className='grow'>
                   <img src="https://i.ibb.co/C5wSXpS/baverages.jpg" alt="" className='mt-16 rounded-lg w-full' />
                  
                    <div className='flex justify-between mb-14 mt-8'>

                            <div className='flex mt-2 gap-4 text-2xl'>
                                <GiHamburgerMenu/>
                                <CgMenuGridO/>
                                <CgMenuRound/>
                                <CgMenuGridR/>
                            </div>

                            <p className='text-sm font-serif font-bold mt-2 flex '>Sort by latest <span className='mt-1 pl-1'><AiOutlineDown/></span></p>

                        
                    </div>



                 {/* fruitsvegetable all Products START______________________________________________________ */}


                    <div className=''>
                    {   
                fruitsvegetables?.map(fruitsvegetable => {
                    return (
                        <div  key={fruitsvegetable._id}>

                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src={fruitsvegetable.picture}alt="Movie" className='h-40'/></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-base text-slate-700 font-serif">{fruitsvegetable.name}</h2>
                                    <p className='text-green-600 font-bold text-xs'>{fruitsvegetable.stock}</p>
                                    <div className='flex text-yellow-400'>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiOutlineStar/>
                                    </div>
                                    <div className="card-actions justify-between ">
                                        <button className="btn btn-success btn-sm text-white ">{fruitsvegetable.price}</button>

                                        <button className="btn btn-outline btn-primary btn-sm">Add to cart</button>

                                    </div>
                                </div>
                            </div>

                           
                        </div>
                    )
                    })
             }
                    </div>


              {/* fruitsvegetable all Products END______________________________________________________ */}




                </div>
            </div>





           
        </div>
    );
};

export default FruitsAndVagetables;