import './checkout.style.scss'

import CartTable from '../../components/cartTable/cartTable.component';

const Checkout = ()=>{
    return (
        <div className='container pt-3'>
            <div className='row justify-content-center'>
                <div className='col-8'>
                    <h2>This is your cart</h2>
                    <CartTable/>
                </div>
            </div>
        </div>
    )
} 

export default Checkout;