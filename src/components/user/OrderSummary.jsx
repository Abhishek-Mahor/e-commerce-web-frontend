import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import Btn from '../common/Btn';

const OrderSummary = () => {

  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const checkoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='w-full md:w-80 bg-gray-50 border rounded-lg p-6 shadow-sm flex flex-col gap-6'>
      <h2 className='text-xl font-bold text-gray-800 border-b pb-3'>Order Summary</h2>

      <div className='flex flex-col gap-4'>
        <div className='flex justify-between text-gray-600'>
          <span>Subtotal</span>
          <span className='font-semibold'>₹{cart.subtotal}</span>
        </div>
        <div className='flex justify-between text-gray-600 border-b pb-4'>
          <span>Shipping</span>
          <span className='text-green-600 font-semibold'>Free</span>
        </div>
        <div className='flex justify-between text-lg font-bold text-gray-800'>
          <span>Total</span>
          <span>₹{cart.total}</span>
        </div>
      </div>

      <Btn
      onClick={checkoutHandler}
      className={'w-full py-3 bg-black hover:bg-gray-800 text-white rounded-lg font-semibold text-center transition-colors duration-150 shadow-md cursor-pointer'}
      text={' Proceed to Checkout'}
      />
      
    </div>
  )
}

export default OrderSummary