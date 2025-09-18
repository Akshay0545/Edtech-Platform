const Razorpay = require("razorpay");

let instance = null;

const getRazorpayInstance = () => {
  if (!instance) {
    instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
  }
  return instance;
};

module.exports = { getRazorpayInstance };
