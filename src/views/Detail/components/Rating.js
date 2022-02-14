import React from 'react'

const Rating = ({rating}) => {
  return (
    <div className="flex flex-row my-1 items-center">
        <span className="text-xl font-bold w-full">{rating}</span>
        <img alt="rating-star" src='#' className="ml-1 w-6 h-6 bg-yellow-500" />
    </div>
  )
}

export default Rating