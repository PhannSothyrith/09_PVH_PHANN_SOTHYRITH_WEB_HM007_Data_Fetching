export async function getAllMovieServices() {
  const res = await fetch(`https://movie-api-get-only-bmc3.vercel.app/api `, {cache:"no-store"} );
  const data = res.json();
  return data;
}
export async function getMovieById(movieId) {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/${movieId}`
  );
  const data = res.json();
  
  return data;
}

export async function getMovieByGenre(genre) {
  const res = await fetch(
    `https://movie-api-get-only-bmc3.vercel.app/api/?genre=${genre}`
  );
  const data = res.json();
  return data;
}
