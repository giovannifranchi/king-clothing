import './paymentForm.style.scss';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '../button/button.component';

const PaymentForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 1000 })
        }).then(res => res.json());

        const clientSecret = response.paymentIntent.client_secret;
        console.log(clientSecret)
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'gio'
                }
            }
        })

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
            <Button buttonType='inverted' text='buy now' />
        </form>
    )
}

export default PaymentForm;
