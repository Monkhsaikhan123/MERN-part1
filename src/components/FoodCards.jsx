import {Link} from 'react-router-dom'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { FaCartShopping } from 'react-icons/fa6'



const FoodCards = ({headline , foods}) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl text-center font-bold text-black my-5'>{headline}</h2>
        <div className='mt-12'>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
              {
                foods.map(food => <SwiperSlide key={food._id}>
                  <Link to={`/food/${food._id}`}>
                    <div className='relative'>
                      <img src={food.ImageURL} alt=''/>
                      <div className=' absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                          <FaCartShopping className='w-4 h-4 text-white'/>
                      </div>
                    </div>
                    <div>
                      <h1>{food.Title}</h1>
                      <p>{food.desc}</p>
                    </div>
                  </Link>
                </SwiperSlide>)
              }
          </Swiper>
        </div>
    </div>
  )
}

export default FoodCards