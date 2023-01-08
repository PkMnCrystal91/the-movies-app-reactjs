import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../movie/pages/HomePage'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/home' element={<HomePage />} />
    </Routes>
  )
}
