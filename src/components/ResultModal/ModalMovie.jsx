export default function modalMovie({ movie, btnClose }) {
    return (
        <div className="fixed z-50 top-0 left-0 bg-black/80 flex items-center rounded-xl w-full h-full overflow-scroll">
            <div className="w-full mx-auto flex flex-wrap justify-center gap-4 items-start">

                <div className=" box-border flex justify-end ">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="relative w-[90vw] md:w-1/2 ">
                    <h2 className="text-white text-4xl font-bold mb-4">{movie.Title}</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Diterbitkan</td>
                                <td> : </td>
                                <td> {movie.Year} </td>
                            </tr>
                            <tr>
                                <td>IMDb</td>
                                <td> : </td>
                                <td> {movie.imdbRating} </td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td> : </td>
                                <td> {movie.Genre} </td>
                            </tr>
                            <tr>
                                <td>Durasi</td>
                                <td> : </td>
                                <td> {movie.Runtime} </td>
                            </tr>
                            <tr>
                                <td>Negara</td>
                                <td> : </td>
                                <td> {movie.Country} </td>
                            </tr>
                            <tr>
                                <td>Sutradara</td>
                                <td> : </td>
                                <td> {movie.Director} </td>
                            </tr>
                            <tr>
                                <td>Aktor</td>
                                <td> : </td>
                                <td> {movie.Actors} </td>
                            </tr>
                            <tr>
                                <td>Sutradara</td>
                                <td> : </td>
                                <td> {movie.Director} </td>
                            </tr>
                            <tr>
                                <td>Plot</td>
                                <td> : </td>
                                <td> {movie.Plot} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <span onClick={btnClose} className="absolute right-4 top-2 font-bold text-3xl hover:cursor-pointer">&times;</span>
            </div>
        </div>
    )
}