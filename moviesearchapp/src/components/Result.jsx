import React from 'react'

function Result(props) {
    const boxes = props.movies.map(
        (item,index)=>{
            return < Box key ={index} image={item.poster_path}title={item.original_title} rating={item.vote_average} />
        }
    )
  return (
    <div className='w-full md:grid grid-cols-5 gap-5  '>
       {boxes}
    </div>
  )
}

export default Result
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const Box = (props) =>{
    return(
        <div className='shadow-xl min-h-[300px]  mt-3 pb-1 cursor-pointer hover:scale-75'>
            <img src={IMGPATH+props.image} alt="" className='w-full' />
            <div className='flex justify-between text-yellow-500 items-center px-2 '>
                <span className='text-2xl text-white'>{props.title}</span>
                <span className='text-xl'>{props.rating}</span>
               
            </div>
        </div>
    )
}