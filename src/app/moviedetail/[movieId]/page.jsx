import { getMovieById } from "@/services/movie.service";

const MovieDetails = async ({ params }) => {
  const movieData = await getMovieById(params.movieId);
  const postedDate = new Date(movieData?.payload?.posted_at);
  const star = (
    <svg
      class="w-4 h-4 text-yellow-300 ms-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
  const noStar = (
    <svg
      class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
  const formattedDate =
    postedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }) +
    ", " +
    postedDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
    });
  return (
    <main>
      <div className="bg-gray-100 h-screen dark:bg-red-800 py-8 pt-44">
        <div className="px-4">
          <div className="flex flex-col md:flex-row ">
            <div className="w-[70%] px-4">
              <div className="h-[700px]  rounded-lg bg-gray-300 dark:bg-red-700 mb-4">
                <img
                  className="h-full w-full object-cover "
                  src={
                    movieData.payload.image == ""
                      ? "../alchemy_of_souls.jpg"
                      : movieData.payload.image
                  }
                  alt="Product Image"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {movieData.payload.director}
              </h2>
              <h2 className="text-white">
                {movieData.payload.runtime} minutes
              </h2>
              <i className="text-white ">{movieData.payload.genre}</i>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1 mb-4">
                {/* {renderStars(rating)} */}
                {/* rating  */}
                <div class="flex items-center">
                  {movieData.payload.rating >= 2 &&
                  movieData.payload.rating < 3 ? (
                    <div className="flex">
                      {star}
                      {star}
                      {noStar}
                      {noStar}
                      {noStar}
                    </div>
                  ) : movieData.payload.rating >= 3 &&
                    movieData.payload.rating < 4 ? (
                    <div className="flex">
                      {star}
                      {star}
                      {star}
                      {noStar}
                      {noStar}
                    </div>
                  ) : movieData.payload.rating >= 4 &&
                    movieData.payload.rating < 5 ? (
                    <div className="flex">
                      {star}
                      {star}
                      {star}
                      {star}
                      {noStar}
                    </div>
                  ) : movieData.payload.rating >= 5 ? (
                    <div className="flex">
                      {star}
                      {star}
                      {star}
                      {star}
                      {star}
                    </div>
                  ) : (
                   ""
                  )}
                </div>
              </p>
              <div className="mb-4"></div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  {movieData.payload.movie_title}
                </span>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  {" "}
                  {movieData.payload.released_year}
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {movieData.payload.description}
                </p>
              </div>
              <p className="mt-20 text-white">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
