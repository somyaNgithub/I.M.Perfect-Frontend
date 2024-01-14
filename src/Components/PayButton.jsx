import React, { useEffect } from 'react';
import Razorpay from 'razorpay';

const RazorpayButton = () => {
  useEffect(() => {
    const options = {
      key: 'YOUR_KEY_ID', // Enter the Key ID generated from the Dashboard
      amount: '50000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Acme Corp', // Your business name
      description: 'Test Transaction',
      image: 'https://example.com/your_logo',
      order_id: 'order_9A33XWu170gUtm', // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: 'Gaurav Kumar', // Your customer's name
        email: 'gaurav.kumar@example.com',
        contact: '9000090000', // Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp1 = new Razorpay(options);
    
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    document.getElementById('rzp-button1').onclick = function (e) {
      rzp1.open();
      e.preventDefault();
    };
  }, []); // Ensure this effect runs only once during component mount

  return (
    <div>
      <button id="rzp-button1">Pay</button>
      <script src="https://checkout.razorpay.com/v1/checkout.js" />
    </div>
  );
};

export default RazorpayButton;
