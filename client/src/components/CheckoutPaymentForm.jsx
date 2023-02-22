// import React, { useState } from 'react';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const CheckoutPaymentForm = () => {
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: elements.getElement(CardElement)
//     });

//     if (error) {
//       setError(error.message);
//       setSuccess(null);
//     } else {
//       setError(null);
//       setSuccess('Paiement réussi !');
//       // Envoyer le paiement au serveur
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement />
//       {error && <div>{error}</div>}
//       {success && <div>{success}</div>}
//       <button type="submit">Payer</button>
//     </form>
//   );
// }

// export default CheckoutPaymentForm;