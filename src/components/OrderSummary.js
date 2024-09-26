import React from "react";
import { Typography, Button } from "@mui/material";

const OrderSummary = ({ totalPrice, handlePlaceOrder }) => {
  return (
    <div>
      <Typography variant="h5" style={{ marginTop: "20px" }}>
        Total Price: ${totalPrice.toFixed(2)}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handlePlaceOrder}
        style={{ marginTop: "20px" }}
      >
        Place Order
      </Button>
    </div>
  );
};

export default OrderSummary;
