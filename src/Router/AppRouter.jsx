
import { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import { LoginPage } from '../auth/pages/LoginPage'
import { useAuthStore } from '../hooks'
import { HomePage } from '../movie/pages/HomePage'

export const AppRouter = () => {

  const { status, checkToken } = useAuthStore();

  useEffect(() => {
    checkToken();
  }, [])
  

  /* if ( status === 'checking' ){
    return (
      <h3>Loading...</h3>
    )
  } */

  return (
    <Routes>

        {
          ( status === 'not-authenticated')
            ?(
              <>
                <Route path='/login' element={<LoginPage />} />
                <Route path="/*" element={ <Navigate to="/login" /> } />
              </>
            )
            : (

              <>
                <Route path='/' element={<HomePage />} />
                <Route path="/*" element={ <Navigate to="/" /> } />
              </>
            )
        }

    </Routes>
  )
}
