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
                if (datas.Response === 'False') {
                    throw new Error(datas.Error)
                };
                setStatus(false)
                return (setData(datas.Search))
            })
            .catch(error => {
                alert(error);
            })
    }
    let listFilm = data.map(movie =>
        <SwiperSlide key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} />
            <h3 className='text-white font-semibold text-xl my-2'>{movie.Title}</h3>
            <button onClick={() => showModalDetile(movie.imdbID)} >Detile</button>
        </SwiperSlide>
    )


    const [detileMovie, setDetileMovie] = useState([])
    const [Show, setShow] = useState(false);
    function showModalDetile(id) {
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
                <SwiperSlide>
                    <ShimmerPostItem card title cta imageHeight={300} imageWidth={210} />
                </SwiperSlide>
                <SwiperSlide>
                    <ShimmerPostItem card title cta imageHeight={300} imageWidth={210} />
                </SwiperSlide>
                <SwiperSlide>
                    <ShimmerPostItem card title cta imageHeight={300} imageWidth={210} />
                </SwiperSlide>
                <SwiperSlide>
                    <ShimmerPostItem card title cta imageHeight={300} imageWidth={210} />
                </SwiperSlide>
            </div>
        )
    }

    function showModal(kopi) {
        if (Show) {
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
        if (!Show) {
            return ''
        }
    }

    function kopi() {
        if (status) {
            return Shimmer();
        }

        return listFilm;
    }


    return (
        <div className='absolute w-[90vw] -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 mt-4 mx-auto'>
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
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
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
