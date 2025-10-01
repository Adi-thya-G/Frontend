

function Card() {
  return (
    <div className='relative w-16 h-16 transform-3d'>
      <div className='w-12 h-12 bg-gray-200 absolute left-4 top-0 z-10 '>

      </div>
      <div className='w-12 h-12 bg-blue-200 absolute top-2 left-2 z-30'>

      </div>
      <div className='w-12 h-12 bg-blue-600 absolute top-4 left-0 z-50'>

      </div>
    </div>
  )
}

export default Card