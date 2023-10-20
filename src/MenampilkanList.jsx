import { useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import React from "react";
import { ShimmerPostItem } from "react-shimmer-effects";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function AkanDihapus() {
    const [data, setData] = useState([]);
    const [status, setStatus] = useState(false)


    function getData() {
        const inputan = document.getElementById('inputan');
        setStatus(true)
        fetch(`http://www.omdbapi.com/?s=${inputan.value}&apikey=aebedaef`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ada yang salah pada link')
                }
                return response.json()
            })
            .then(datas => {
                console.log(datas);
                if (datas.Response === 'False') {
                    throw new Error(datas.Error)
                };
                setStatus(false)
                return (setData(datas.Search))
            })
            .catch(error => {
                console.log(error.name);
                if (error.name === 'Error') {
                    setStatus('not found')
                }
                if (error.name === 'TypeError') {
                    setStatus('not connection')
                }
                // alert(error);
            })
    }
    let listFilm = data.map(movie =>
        <SwiperSlide key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} className='w-full' />
            <h3 className='text-white font-semibold text-xl my-2'>{movie.Title}</h3>
            <button onClick={() => showModalDetile(movie.imdbID)} >Detile</button>
        </SwiperSlide>
    )


    const [detileMovie, setDetileMovie] = useState(null)
    const [Show, setShow] = useState(false);
    function showModalDetile(id) {
        setDetileMovie(null)
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=aebedaef`)
            .then(Response => Response.json())
            .then(datas => setDetileMovie(datas))
            .catch(err => console.log(err.name))

        setShow(true)
    }

    function closeModal() {
        setShow(false)
    }

    function Shimmer() {
        return (
            <div>
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
            </div>
        )
    }

    function notFound() {
        return (
            <h1 className='text-center mt-8'>Movies Not Found</h1>
        )
    }
    function notConnection() {
        return (
            <h1>Not Connection</h1>
        )
    }
    function showModal(kopi) {
        if (Show) {
            if (detileMovie) {
                return (
                    <div className="fixed z-50 top-0 left-0 bg-black/80 flex items-center rounded-xl w-full h-full overflow-scroll">
                        <div className="w-full mx-auto flex flex-wrap justify-center gap-4 items-start">

                            <div className=" box-border flex justify-end ">
                                <img src={kopi.Poster} alt={kopi.Title} />
                            </div>
                            <div className="relative w-[90vw] md:w-1/2 ">
                                <h2 className="text-white text-4xl font-bold mb-4">{kopi.Title}</h2>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Diterbitkan</td>
                                            <td> : </td>
                                            <td> {kopi.Year} </td>
                                        </tr>
                                        <tr>
                                            <td>IMDb</td>
                                            <td> : </td>
                                            <td> {kopi.imdbRating} </td>
                                        </tr>
                                        <tr>
                                            <td>Genre</td>
                                            <td> : </td>
                                            <td> {kopi.Genre} </td>
                                        </tr>
                                        <tr>
                                            <td>Durasi</td>
                                            <td> : </td>
                                            <td> {kopi.Runtime} </td>
                                        </tr>
                                        <tr>
                                            <td>Negara</td>
                                            <td> : </td>
                                            <td> {kopi.Country} </td>
                                        </tr>
                                        <tr>
                                            <td>Sutradara</td>
                                            <td> : </td>
                                            <td> {kopi.Director} </td>
                                        </tr>
                                        <tr>
                                            <td>Aktor</td>
                                            <td> : </td>
                                            <td> {kopi.Actors} </td>
                                        </tr>
                                        <tr>
                                            <td>Sutradara</td>
                                            <td> : </td>
                                            <td> {kopi.Director} </td>
                                        </tr>
                                        <tr>
                                            <td>Plot</td>
                                            <td> : </td>
                                            <td> {kopi.Plot} </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <span onClick={closeModal} className="absolute right-4 top-2 font-bold text-3xl hover:cursor-pointer">&times;</span>
                        </div>
                    </div>
                )
            }
            if (!detileMovie) {
                return (
                    <div className="fixed z-50 top-0 left-0 bg-black/80 flex items-center rounded-xl w-full h-full overflow-scroll" >
                        <div className="w-full mx-auto flex flex-wrap justify-center gap-4 items-start animate-pulse">

                            <div className=" box-border flex justify-end bg-white w-[290px] h-[440px] rounded-lg">
                            </div>
                            <div className="relative w-[90vw] md:w-1/2">
                                <div className="bg-white w-1/2 h-8 text-4xl font-bold mb-4 rounded-lg"></div>
                                <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                                <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                                <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                                <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                                <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                                <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                                <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                                <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                                <div className='w-full h-5 bg-white rounded-md mb-3'></div>
                            </div>
                            <span onClick={closeModal} className="absolute right-4 top-2 font-bold text-3xl hover:cursor-pointer">&times;</span>
                        </div>
                    </div>
                )
            }
        }
        if (!Show) {
            return ''
        }
    }

    function kopi() {
        console.log(status);
        console.log(data);
        if (status === true) {
            return Shimmer();
        }

        if (status === 'not found') {
            console.log('ok');
            return notFound()
        }
        if (status === 'not connection') {
            console.log('ok');
            return notConnection()
        }

        return listFilm;
    }


    return (
        <div className='absolute w-[90vw] -translate-x-1/2 left-1/2 -translate-y-1/2 xl:top-1/2 mt-8 mx-auto'>
            <div className='w-fit mx-auto flex gap-1 items-center'>
                <input type="text" id='inputan' className=' rounded-lg text-xl p-[.35rem] bg-white text-black border-2 border-black' />
                <button className='rounded-1 border' onClick={getData}>Get Data</button>
            </div>
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
                {kopi()}

            </Swiper>
            {showModal(detileMovie)}
        </div>
    )
}
