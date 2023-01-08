import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from './Router/AppRouter'

export const MoviesApp = () => {
  return (
    <BrowserRouter>
      < AppRouter />
    </BrowserRouter>
  )
}

