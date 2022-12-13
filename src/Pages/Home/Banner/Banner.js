import React from 'react';
import img1 from '../../../assets/banner/alproMilk.jpg'
import img2 from '../../../assets/banner/cvekla.jpg'
import img3 from '../../../assets/banner/KettleChips.jpg'
import img4 from '../../../assets/banner/TreeTop_Thumb.jpg'

const Banner = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-10'>

              <div>
                  <h2 className='text-sky-400 mt-10 text-center text-5xl font-bold'>HighLife</h2>
                  <p className='text-center mt-5 font-bold text-2xl text-slate-700 mb-5'>Experience Personalized Online Shopping in Bangladesh with HighLife</p>

                  <p className='text-center text-slate-700'>Online Shopping BD has never been easier. HighLife is best online shopping store in Bangladesh that features 10+ million products at affordable prices. As bangaldesh's online shopping landscape is expanding every year, online shopping in dhaka, chittagong, khulna, sylhet and other big cities are also gaining momentum. Daraz is among best websites for online shopping in bangladesh that promises fast, reliable and convenient delivery of products to your doorstep.</p>
              </div>


              <div>


              <div>
                <div className="carousel  h-96 mt-10">
                 <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} alt="" className=" rounded-xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} alt="" className="rounded-xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} alt="" className="rounded-xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} alt="" className="rounded-xl" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
          </div>
          </div>
</div>


              </div>


        </div>
    );
};

export default Banner;