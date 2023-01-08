import { useState } from 'react'

export const HomePage = () => {

  const [movies, setMovies] = useState(['The inmortal', 'Ghost Rider', 'Van Hellsing']);

  return (
    <>
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
