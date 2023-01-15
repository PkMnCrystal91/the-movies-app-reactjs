import React from 'react'

export const MovieCard = () => {
  return (
    <>
      {/* <div className="w-64 box-border m-4 overflow-hidden relative">
          <img src='images/poster.jpg' className="poster"></img>
          <div className="movie-details">
              <div className="box">
                  <h4 className="title">Movie Title</h4>
                  <p className="rating">9.5</p>
              </div>
              <div className="overview">
                  <h1>overview</h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium obcaecati tempora voluptas culpa vel 
              </div>
          </div>
      </div> */}

      <div className='bg-zinc-800 p-2 mx-6  rounded-2xl transform hover:scale-105'>         
            <div className='flex flex-col box-border items-center w-64 overflow-hidden'>
              {/* Poster */}
              <img src='images/poster.jpg' className="rounded-xl w-full h-50" />
              {/* Content */}
              <div className='p-6 flex flex-col gap-2'>
                  {/* Title */}
                  <h2 className='font-medium text-center text-white'>Movie Title</h2>
                  {/* Release date */}
                  
                  {/* Vote */}
                  <p className='text-center text-white'>Vote</p>
              </div>
            </div>          
      </div>
    </>
  )
}
