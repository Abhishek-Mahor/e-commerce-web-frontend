

const Footer = () => {
  return (
    <div className='bg-red-800 w-full h-20 flex justify-around items-center mt-50'>

      <nav>
        <ul className='flex gap-5 mx-5 text-black-600 font-medium'>
          <li><a href='/about'>Term</a></li>
          <li><a href='/contact'>Contact</a></li>
        </ul>
      </nav>
      
      <h6 className='text-black-500 text-sm font-medium'>© 2023 Your Company. All rights reserved.</h6>

    </div>
  )
}

export default Footer