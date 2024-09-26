import React from "react";
import { TextField, Grid, Typography } from "@mui/material";

const UserInfoForm = ({ userInfo, handleInputChange }) => {
  return (
    <div>
      <Typography variant="h6" style={{ marginTop: "20px" }}>
        User Information
      </Typography>
      <TextField
        fullWidth
        label="Name"
        name="name"
        value={userInfo.name}
        onChange={handleInputChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Address"
        name="address"
        value={userInfo.address}
        onChange={handleInputChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Payment Method"
        name="paymentMethod"
        value={userInfo.paymentMethod}
        onChange={handleInputChange}
        margin="normal"
        variant="outlined"
      />
    </div>
  );
};

export default UserInfoForm;
