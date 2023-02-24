const express = require("express");
const router = express.Router();;

const stripe = require("stripe")("sk_test_51Me6rsLc792vO51u5oyIarM91Q2AfGLp8LZ3JpokhTGUgMWN0Ak2YHd7HBgN6XCDPmmvB0MoiTIpUCasP2cQ0Wnv00em6OhNBh");


// Create a Payment Intent (returns the client with a temporary secret)
router.post("/", async (req, res) => {
    console.log('Received create-payment-intent request:', req.body);
    const { price } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: price,
        currency: "usd",
    });

    console.log('Payment intent created:', paymentIntent);

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

module.exports = router;