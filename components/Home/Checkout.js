import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'

function Checkout({amount}) {
    const appearance={
        theme:'stripe'
    };
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(elements===null){
            return;
        }
        const {error:submitError} = await elements.submit();
        if(submitError){
            console.log(submitError);
            return;
        }

        const result = await fetch('/api/create-intent',{
            method:'POST',
            body:JSON.stringify({
                amount:amount
            })
        });

        const secretKey = await result.json();
        console.log(secretKey);

        const {error} = await stripe.confirmPayment({
            clientSecret:secretKey,
            elements,
            confirmParams:{
                return_url:"http://localhost:3000/"
            }
        })
    }
  return (
    <div className='flex flex-col justify-center items-center w-full mt-6'>
        <h3 className='mt-5 font-medium p-10'>Amount Payable: ₹{amount}</h3>
        <form onSubmit={handleSubmit} className='max-w-md '>
            <PaymentElement className='help'/>
            <button className='w-full bg-white text-black p-2 rounded-xl border-[2px] mt-2'>Pay</button>
        </form>
    </div>
  )
}

export default Checkout