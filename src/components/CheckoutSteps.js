import React from 'react'
import {Link} from 'react-router-dom'

const CheckoutSteps = ({step1, step2, step3, step4}) => {
  return (
    <div>
        <div>
            {step1 ? (
                <Link to='/login' >Sign In</Link>
            ): <Link style={{color: 'gray'}} disabled > Sign In</Link> }
        </div>

        <div>
            {step2 ? (
                <Link to='/shipping' >Shipping</Link>
            ): <Link style={{color: 'gray'}} disabled > Shipping</Link> }
        </div>

        <div>
            {step3 ? (
                <Link to='/payment' >Payment</Link>
            ): <Link style={{color: 'gray'}} disabled >Payment</Link> }
        </div>

        <div>
            {step4 ? (
                <Link to='/placeorder' >Place Order</Link>
            ): <Link style={{color: 'gray'}} disabled > Place Order</Link> }
        </div>
    </div>
  )
}

export default CheckoutSteps