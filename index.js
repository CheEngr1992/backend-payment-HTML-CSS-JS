paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                     value: "299.9"
                }
            }]
        });
    }, 

    onApprove: function(data, actions) {
        // Perform your action here for a successful payment
        alert('Payment completed successfully!');
    }, 
    onError: function(err) {
        console.error('Error during payment:', err);
        alert('Payment failed. Please try again.');
    }
    
}).render('#paypal-button')
