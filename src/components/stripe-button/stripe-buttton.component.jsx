import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const publishedKey =
    "pk_test_51HH6z4F7n10hSGQThYcdPdG5ONrPE8giK9EVNGUgferVQn6zEUMycKcFumuJF5b6pAUdwSMVwLxOudSpRbpqWVwr00MDNTzAwr";
  const priceForStripes = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("payment done");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="crwn-market"
      billingAddress
      image="https://svgshare.com/i/CUz.svg"
      shippingAddress
      description={`Your Total Payment is $ ${price}`}
      amount={priceForStripes}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishedKey}
    />
  );
};

export default StripeCheckoutButton;
