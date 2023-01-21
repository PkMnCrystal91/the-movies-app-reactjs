import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'
import { HomePage } from '../movie/pages/HomePage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/home' element={<HomePage />} />
    </Routes>
  )
}
