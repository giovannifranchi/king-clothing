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

        console.log(response);

    }

    return (
        <form onSubmit={paymentHandler}>
            <CardElement />
            <Button buttonType='inverted' text='buy now' />
        </form>
    )
}

export default PaymentForm;
