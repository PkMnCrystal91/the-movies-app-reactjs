import { useState, useEffect } from 'react'
import { useAuthStore } from '../../hooks';
import { MovieCard } from '../components/MovieCard';

let API_key  = "&api_key=ff56685198facead6ad507c2f07f55d4";
let base_url = "https://api.themoviedb.org/3";
let url      = base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
let arr = ["Popular", "Kids", "Comedie", "Drama"]

export const HomePage = () => {

  const { startLogout} = useAuthStore();

  const [movieData, setMovies] = useState([]);
  const [url_set, setUrl] = useState(url)

  useEffect(() => {
    fetch(url_set).then(res => res.json()).then(data =>{
      console.log(data.results);
      setMovies(data.results);
    })
  }, [url_set])
  
  const getData=(movieType)=>{

      if(movieType=="Popular")
      {
          url=base_url+"/discover/movie?sort_by=popularity.desc"+API_key;
      }
      if(movieType=="Kids")
      {
          url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+API_key;
      }
      if(movieType=="Drama")
      {
          url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_key;
      }
      if(movieType=="Comedie")
      {
          url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_key;
      }
      setUrl(url);

  }

  return (
    <>
      {/* Nav Container */}
      <nav className='w-full mx-auto p-6 bg-zinc-900 mb-7'>
          {/* Flex Container For All Items */}
          <div className='flex items-center justify-between'>
            {/* Flex Container For Logo/Menu */}
            <div className='flex items-center gap-4 text-white'>
                {/* Logo */}
                <img src="https://flowbite.com/docs/images/logo.svg" className='h-6 mr-3 sm:h-9' alt="company-logo" />
                {/* Links */}
                <div className='flex items-center gap-4'>
                  {
                    arr.map((value) => {
                      return(
                        <a href="" key={value} onClick={(e)=>{getData(e.target.name)}}>{value}</a>
                      )
                    })
                  }
                </div>
            </div>

            {/* Center Menu */}
            {/* <div>
            </div> */}

            {/* Right Buttons Menu */}   
            <div className='flex gap-10 items-center'>
              <div className='flex items-center'>
                
                <input type="text" placeholder='Search For a movie' className='' />

                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-slate-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </button>
              </div>
              <button type='button' className='bg-blue-700 font-medium rounded-lg px-5 py-2.5' onClick={ startLogout }>Logout</button>

            </div>         
          </div> 
      </nav>

      <dir className='m-auto flex flex-wrap justify-center'>

        {
          movieData.map((res,pos) => {
            
            return( <MovieCard info={res} key={pos} /> )
          })
        }
      </dir>
    </>
  )
}
