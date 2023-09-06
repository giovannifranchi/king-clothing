import './paymentForm.style.scss';
import { CardElement } from '@stripe/react-stripe-js';
import  Button  from '../button/button.component';

const PaymentForm = ()=>{
    return (
        <div>
            <CardElement/>
            <Button buttonType='inverted' text='buy now'/>
        </div>
    )
}

export default PaymentForm;
