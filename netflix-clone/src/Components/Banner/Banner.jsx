import React ,{useEffect,useState} from 'react';
import './banner.css'
import requests from '../../Utils/requests';
import axios from '../../Utils/axios';

const Banner = () => {
 const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        console.log(requests);
        const results = response.data.results;
        const randomMovie = results[Math.floor(Math.random() * results.length)];
        setMovie(randomMovie);
      } catch (error) {
        console.error("Error fetching Netflix Originals:", error);
      }
    };

    fetchData();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <p className="banner-description">{truncate(movie?.overview, 150)}</p>
      </div>
      <div className="banner-fadeBottom" />
    </div>
  );
};

export default Banner