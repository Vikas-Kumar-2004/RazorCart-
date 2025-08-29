import React from 'react'
import axios from "axios"
import '../styles/Products.css'
function Products({ products }) {
    const checkoutHandler = async (amount) => {
        const { data: keyData } = await axios.get("/api/v1/getKey")
        // console.log(keyData);
        const { key } = keyData;
        console.log(key);



        // console.log(amount);
        const { data: orderData } = await axios.post("/api/v1/payment/process", {
            amount
        })
        const { order } = orderData
        console.log(order);
        const options = {
            key, 
            amount,
            currency: 'INR',
            name: 'Vikas Coding',
            description: 'Razor Pay Tutorial',
            order_id: order.id, // This is the order_id created in the backend
            callback_url: '/api/v1/paymentVerification', // Your success URL
            prefill: {
                name: 'Vikas Kumar',
                email: 'vk@example.com',
                contact: '9999999999'
            },
            theme: {
                color: '#F37254'
            },
        };

        const rzp = new Razorpay(options);
        rzp.open();


    }
    console.log(products);

    return (
        <div className="products-container">
            {
                products.map((item) => (
                    <div className="product-card" key={item.id}>
                        <img src={item.image} alt={item.title} className='product-image' />
                        <h3 className='product-title'>{item.title}</h3>
                        <p className='product-price'>Price <strong>{item.price}</strong></p>
                        <button className='pay-button' onClick={() => checkoutHandler(item.price)}>Pay({item.price})/-</button>
                    </div>
                ))
            }

        </div>
    )
}

export default Products