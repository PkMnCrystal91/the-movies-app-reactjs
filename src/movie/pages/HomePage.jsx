import { useState } from 'react'

export const HomePage = () => {

  const [movies, setMovies] = useState(['The inmortal', 'Ghost Rider', 'Van Hellsing']);

  return (
    <>
      {/* Nav Container */}
      <nav className='w-full mx-auto p-6 bg-zinc-900 '>
          {/* Flex Container For All Items */}
          <div className='flex items-center justify-between'>
            {/* Flex Container For Logo/Menu */}
            <div className='flex items-center gap-4 text-white'>
                {/* Logo */}
                <img src="https://flowbite.com/docs/images/logo.svg" className='h-6 mr-3 sm:h-9' alt="" />
                {/* Links */}
                <div className='flex items-center gap-4'>
                  <a href="">Home</a>
                  <a href="">Favorites</a>
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
              <button type='button' className='bg-blue-700 font-medium rounded-lg px-5 py-2.5'>Logourt</button>

            </div>         
          </div> 
      </nav>

      <ul>
          {
            movies.map( movie => (
              <li key={movie}>{movie}</li>
            ))
          }
      </ul>
    </>
  )
}
