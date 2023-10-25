import React from "react";
import { useState, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ShowModalShimmer from './components/Shimmers/ShowModalShimmer';
import ShowShimmerMovies from "./components/Shimmers/ShowShimmerMovies";
import ShowModalMovie from './components/ResultModal/showModalMovie';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function showListMovies() {
    const [dataMovie, setDataMovie] = useState([]);
    const [statusShimmer, setStatusShimmer] = useState(false)
    const API_KEY = 'aebedaef';
    const BASE_URL = `http://www.omdbapi.com/`;
    function getDataMovies() {
        let getNameMovie = document.getElementById('inputan');
        let endpoinGetMovies = `${BASE_URL}?s=${getNameMovie.value}&apikey=${API_KEY}`;
        setStatusShimmer(true)
        fetch(endpoinGetMovies)
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
                setStatusShimmer(false)
                return (setDataMovie(datas.Search))
            })
            .catch(error => {
                if (error.name === 'Error') {
                    setStatusShimmer('not found')
                }
                if (error.name === 'TypeError') {
                    setStatusShimmer('not connection')
                }
            })
    }
    let listMovies = dataMovie.map(movie =>
        <SwiperSlide key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} className='w-full' />
            <h3 className='text-white font-semibold text-xl my-2'>{movie.Title}</h3>
            <button onClick={() => showModalDetailMovie(movie.imdbID)} >Detile</button>
        </SwiperSlide>
    )
    const [detailMovie, setDetailMovie] = useState(null)
    const [statusShowModal, setStatusShowModal] = useState(false);
    function showModalDetailMovie(id) {
        setDetailMovie(null)
        const ID_MOVIE = id;
        let endpoinGetMovieDetail = `${BASE_URL}?i=${ID_MOVIE}&apikey=${API_KEY}`
        fetch(endpoinGetMovieDetail)
            .then(Response => Response.json())
            .then(datas => setDetailMovie(datas))
            .catch(err => console.log(err.name))
        setStatusShowModal(true)
    }
    function closeModalMovie() {
        setStatusShowModal(false)
    }
    function notFoundMovies() {
        return (
            <h1 className='text-center mt-8'>Movies Not Found</h1>
        )
    }
    function notConnectionNetwork() {
        return (
            <h1>Not Connection</h1>
        )
    }
    function showModalMovie(movie) {
        if (statusShowModal) {
            if (detailMovie) {
                return <ShowModalMovie movie={movie} btnClose={closeModalMovie} />
            }
            if (!detailMovie) {
                return <ShowModalShimmer />
            }
        }
        if (!statusShowModal) {
            return ''
        }
    }
    function searchResult() {
        if (statusShimmer === true) {
            return <ShowShimmerMovies />
        }
        if (statusShimmer === 'not found') {
            return notFoundMovies()
        }
        if (statusShimmer === 'not connection') {
            return notConnectionNetwork()
        }
        return listMovies;
    }
    return (
        <div className='absolute w-[90vw] -translate-x-1/2 left-1/2 -translate-y-1/2 xl:top-1/2 mt-8 mx-auto'>
            <div className='w-fit mx-auto flex gap-1 items-center'>
                <input type="text" id='inputan' className=' rounded-lg text-xl p-[.35rem] bg-white text-black border-2 border-black' />
                <button className='rounded-1 border' onClick={getDataMovies}>Get Data</button>
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
                {searchResult()}
            </Swiper>
            {showModalMovie(detailMovie)}
        </div>
    )
}