import Card from "../card/Card";
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'


export default function MovieList() {
    const [movieList, setMovieList] = useState([]);
    const { type } = useParams();
    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
        getData()
    }, [type])
    return (
        <>
        </>
    )
}