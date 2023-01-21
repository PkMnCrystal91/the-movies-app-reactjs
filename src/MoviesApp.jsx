import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router/AppRouter'
import { store } from './store'

export const MoviesApp = () => {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        < AppRouter />
      </BrowserRouter>
    </Provider>
  )
}

