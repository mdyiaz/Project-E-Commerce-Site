import React from 'react';

const HighlifeExtrasImageSection = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-16 px-20 gap-10'>
            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/pr0m2WY/cookie1.jpg" alt='' className="w-full rounded-lg" />

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-16">
                            <h1 className='text-sm text-red-500 font-semibold'>WEEKEND DISCOUNT 40%</h1>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-24">
                            <h1 className='text-2xl font-bold text-slate-700'>Cookie & Ice-Cream</h1>
                        </div>


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-32">
                            <h1 className='text-sm'>HighLifE  Weekend  Discount</h1>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-44">
                            <button className="btn btn-active btn-primary rounded-full px-4 btn-sm text-xs text-white">Shop Now</button>
                        </div>

                    </div> 
                </div>
            </div>


            <div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://i.ibb.co/KX0MrpV/cookie2.jpg" alt='' className="w-full rounded-lg" />
                        
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-16">
                            <h1 className='text-sm text-red-500 font-semibold'>WEEKEND DISCOUNT 40%</h1>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-24">
                            <h1 className='text-2xl font-bold text-slate-700'>Cookie & Ice-Cream</h1>
                        </div>


                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-32">
                            <h1 className='text-sm'>HighLifE  Weekend  Discount</h1>
                        </div>

                        <div className="absolute flex justify-between transform -translate-y-1/2 left-12 right-5 top-44">
                            <button className="btn btn-active btn-sm btn-secondary rounded-full px-4 text-xs text-white">Shop Now</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default HighlifeExtrasImageSection;