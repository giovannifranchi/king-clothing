import './checkout.style.scss'

import CartTable from '../../components/cartTable/cartTable.component';
import PaymentForm from '../../components/paymentForm/paymentForm.component';

const Checkout = ()=>{
    return (
        <div className='container pt-3'>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <CartTable/>
                    <PaymentForm/>
                </div>
            </div>
        </div>
    )
} 

export default Checkout;