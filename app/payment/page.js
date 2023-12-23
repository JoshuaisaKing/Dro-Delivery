"use client"
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';
import Checkout from '../../components/Home/Checkout';
import React from 'react'

function Payment() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount');
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);
  const options = {
    mode:'payment',
    amount:Math.round(amount*100),
    currency:'inr'
  };
  console.log(amount);
  return (
    <Elements stripe={stripePromise} options={options}>
      <Checkout amount={amount}/>
    </Elements>
  )
}

export default Payment