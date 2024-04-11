import { getMovieByGenre } from '@/services/movie.service';
import React from 'react'

const CardScienceFictionComponent = async () => {
    const movieData = await getMovieByGenre("Science Fiction");
  return (
    <div className="flex overflow-auto gap-4 ml-10 bg-red-900 no-scrollbar text-start ">
    {movieData.payload.map((data) => (
      <div key={data.movie_id} className="  mt-3">
        <a
          className="p-[14px] w-[300px] bg-white border rounded-lg border-indigo-300 rounded-2x hover:shadow-xl  mt-2  flex flex-col items-center"
          href={`/moviedetail/${data.movie_id}`}
        >
          <img
            src={data.image == "" ? "../default_img.jpg" : data.image}
            className="shadow rounded-md overflow-x-auto  border "
          />
          <div className="mt-2 mb-2">
            <h4 className="line-clamp-1 font-bold text-md">
              {data.movie_title}
            </h4>
            <p className="mt-2 text-gray-600 line-clamp-2">
              {data.description}
            </p>
          </div>
        </a>
      </div>
    ))}
  </div>
  )
}

export default CardScienceFictionComponent