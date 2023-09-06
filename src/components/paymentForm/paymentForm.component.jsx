import './paymentForm.style.scss';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import  Button  from '../button/button.component';

const PaymentForm = ()=>{

    const stripe = useStripe();
    const elements = useElements();
    
    const paymentHandler = async(e)=>{
        e.preventDefault();
        if(!stripe || !elements) return;
        
    }
    
    return (
        <div>
            <CardElement/>
            <Button buttonType='inverted' text='buy now'/>
        </div>
    )
}

export default PaymentForm;
