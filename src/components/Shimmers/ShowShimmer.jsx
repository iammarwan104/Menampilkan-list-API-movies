import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function showShimmer() {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                },
            }}
            modules={[Navigation]}
            className="w-full  right-0 bottom-0 my-8">
            <SwiperSlide className='bg-white p-4 rounded-lg animate-pulse'>
                <div className='w-full h-[350px] bg-slate-200 rounded-lg mb-6'></div>
                <div className='w-full h-5 bg-slate-200 rounded-lg mb-3'></div>
                <div className='w-3/4 h-5 bg-slate-200 rounded-lg mb-6'></div>
                <div className='w-24 h-8 bg-slate-200 rounded-lg'></div>
            </SwiperSlide>
            <SwiperSlide className='bg-white p-4 rounded-lg animate-pulse'>
                <div className='w-full h-[350px] bg-slate-200 rounded-lg mb-6'></div>
                <div className='w-full h-5 bg-slate-200 rounded-lg mb-3'></div>
                <div className='w-3/4 h-5 bg-slate-200 rounded-lg mb-6'></div>
                <div className='w-24 h-8 bg-slate-200 rounded-lg'></div>
            </SwiperSlide>
            <SwiperSlide className='bg-white p-4 rounded-lg animate-pulse'>
                <div className='w-full h-[350px] bg-slate-200 rounded-lg mb-6'></div>
                <div className='w-full h-5 bg-slate-200 rounded-lg mb-3'></div>
                <div className='w-3/4 h-5 bg-slate-200 rounded-lg mb-6'></div>
                <div className='w-24 h-8 bg-slate-200 rounded-lg'></div>
            </SwiperSlide>
            <SwiperSlide className='bg-white p-4 rounded-lg animate-pulse'>
                <div className='w-full h-[350px] bg-slate-200 rounded-lg mb-6'></div>
                <div className='w-full h-5 bg-slate-200 rounded-lg mb-3'></div>
                <div className='w-3/4 h-5 bg-slate-200 rounded-lg mb-6'></div>
                <div className='w-24 h-8 bg-slate-200 rounded-lg'></div>
            </SwiperSlide>
        </Swiper>

    )
}