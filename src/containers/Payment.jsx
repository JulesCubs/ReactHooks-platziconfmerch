import React, { useContext } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import AppContext from '../context/AppContext'
import '../styles/components/Payment.css'
import handleSumTotal from '../utils/handleSumTotal'
import { clientIdPaypal } from '../../config'

const ENV = clientIdPaypal

const Payment = (history) => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state; 

    const paypalOptions = {
        clientId: `${ENV}`,
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyles = {
        layout: 'vertical',
        shape: 'rect',
    }

    const handlePaymentSuccess = (data) => {
        if(data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder)
            history.push('/checkout/success')
        }
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido: </h3>
                { cart.map((item)=> (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>
                                $ {' '} {item.price}
                            </span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton                         
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyles}
                        amount={handleSumTotal(cart)}
                        // createOrder={() => console.log('Start Payment')}
                        onSuccess={data => handlePaymentSuccess(data)}
                        onError={error => console.log(error)}
                        onCancel={data => console.log(data)}
                    />
                    Boton de pago con PAYPAL
                </div>
            </div>
            
        </div>
    )
}

export default Payment;
