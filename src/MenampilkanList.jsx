import { useState, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ShowShimmer from './components/Shimmers/ShowShimmer';
import ShowModalShimmer from './components/Shimmers/ShowModalShimmer';
import ModalMovie from './components/ResultModal/modalMovie';



export default function MenampilkanList() {
    // state ini dijadikan tempat penampungan data film yang telah diambil menggunakan method fetch
    // dan nilai defaultnya harus array kosong agar method map tidak error
    const [dataMovie, setDataMovie] = useState([]);
    // fungsi state ini untuk mengaktifkan/nonaktifkan efek shimmer
    // defaultnya shimmer nonaktif/false
    // ada 4 nilai yang akan dimasukkan kedalam state ini yaitu : false, true, not found, not connection
    // 
    const [statusShimmer, setStatusShimmer] = useState(false)
    const API_KEY = 'aebedaef';
    const BASE_URL = `http://www.omdbapi.com/`;
    function GetData() {
        let getNameMovie = document.getElementById('inputan');
        let endPoinGetMovies = `${BASE_URL}?s=${getNameMovie.value}&apikey=${API_KEY}`;
        // ketika data film dalam proses pengambilan
        // aktifkan efek shimmer dengan kata keyword true
        setStatusShimmer(true)
        fetch(endPoinGetMovies)
            .then(response => {
                // jika terdapat masalah pada url movie maka akan menampilan pesan dibawah
                if (!response.ok) {
                    throw new Error('Ada yang salah pada link')
                }
                // jika proses lancar, promise akan dirubah menjadi data json
                return response.json()
            })
            .then(datas => {
                // jika nama film tidak ditemukan maka error akan ditangkap dan dilempar ke method catch
                if (datas.Response === 'False') {
                    throw new Error(datas.Error)
                };
                // jika proses berjalan lancar, efek shimmer akan dihilangkan dengan keyword false
                setStatusShimmer(false)
                // kemudian memasukkan data film ke dalam variable data pada state diatas
                return (setDataMovie(datas.Search))
            })
            .catch(error => {
                // jika nama error adalah Error maka rubah nilai statusShimmer menjadi not found
                if (error.name === 'Error') {
                    setStatusShimmer('not found')
                }
                // jika nama error adalah TypeError maka rubah nilai statusShimmer menjadi not connection
                if (error.name === 'TypeError') {
                    setStatusShimmer('not connection')
                }
            })
    }
    let listFilm = dataMovie.map(movie =>
        <SwiperSlide key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} className='w-full' />
            <h3 className='text-white font-semibold text-xl my-2'>{movie.Title}</h3>
            <button onClick={() => ShowModalDetail(movie.imdbID)} >Detile</button>
        </SwiperSlide>
    )
    // ini variable untuk menampung detail movie, nilai defaut null/kosong
    const [detailMovie, setDetailMovie] = useState(null)
    const [StatusShowModal, setStatusShowModal] = useState(false);
    function ShowModalDetail(id) {
        setDetailMovie(null)
        const ID_MOVIE = id;
        let endPointGetMovieDetail = `${BASE_URL}?i=${ID_MOVIE}&apikey=${API_KEY}`
        fetch(endPointGetMovieDetail)
            .then(Response => Response.json())
            .then(datas => setDetailMovie(datas))
            .catch(err => console.log(err.name))
        setStatusShowModal(true)
    }
    function CloseModal() {
        setStatusShowModal(false)
    }
    function NotFoundMovies() {
        return (
            <h1 className='text-center mt-8'>Movies Not Found</h1>
        )
    }
    function NotConnectionNetwork() {
        return (
            <h1>Not Connection</h1>
        )
    }
    function ShowModal(movie) {
        if (StatusShowModal) {
            if (detailMovie) {
                return <ModalMovie movie={movie} btnClose={CloseModal} />
            }
            if (!detailMovie) {
                return <ShowModalShimmer />
            }
        }
        if (!StatusShowModal) {
            return ''
        }
    }
    function SearchResult() {
        if (statusShimmer === true) {
            return <ShowShimmer />
        }
        if (statusShimmer === 'not found') {
            return NotFoundMovies()
        }
        if (statusShimmer === 'not connection') {
            return NotConnectionNetwork()
        }
        return listFilm;
    }
    return (
        <div className='absolute w-[90vw] -translate-x-1/2 left-1/2 -translate-y-1/2 xl:top-1/2 mt-8 mx-auto'>
            <div className='w-fit mx-auto flex gap-1 items-center'>
                <input type="text" id='inputan' className=' rounded-lg text-xl p-[.35rem] bg-white text-black border-2 border-black' />
                <button className='rounded-1 border' onClick={GetData}>Get Data</button>
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
                {SearchResult()}
            </Swiper>
            {ShowModal(detailMovie)}
        </div>
    )
}