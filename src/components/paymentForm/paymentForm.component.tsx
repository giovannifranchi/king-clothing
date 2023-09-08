import './paymentForm.style.scss';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '../button/button.component';
import { useState, FormEvent } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalPrice } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';


const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    

    const totalPrice = useSelector(selectTotalPrice);
    const user = useSelector(selectCurrentUser);

    const [isPyamentLoading, setIsPaymentLoading] = useState(false);


    const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        setIsPaymentLoading(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: totalPrice * 100 })
        }).then(res => res.json());

        const clientSecret = response.paymentIntent.client_secret;

        const cardDetails = elements.getElement(CardElement)

        if(!cardDetails) return;

        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: cardDetails,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email
                }
            }
        })

        setIsPaymentLoading(false);

        if(paymentResult.error){
            alert(paymentResult.error);
        }else{
            if(paymentResult.paymentIntent.status === 'succeeded'){
                alert('payment successfull');
            }
        }
    }

    return (
        <form onSubmit={paymentHandler}>
            <CardElement />
            <Button isLoading={isPyamentLoading} buttonType='inverted' text='buy now' />
        </form>
    )
}

export default PaymentForm;
