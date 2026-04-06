import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useNowPopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  
  useNowPlayingMovies();
  useNowPopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  useTrendingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse