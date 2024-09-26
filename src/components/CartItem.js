import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    console.log(`Removing item with id: ${id}`); // Debugging line
    dispatch(removeFromCart({ id })); // Ensure this matches your action payload structure
  };

  return (
    <ListItem
      alignItems="flex-start"
      style={{
        marginBottom: "20px",
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <ListItemAvatar>
        <Avatar src={item.image} alt={item.title} variant="rounded" />
      </ListItemAvatar>
      <Typography style={{ marginLeft: "16px", flex: 1 }}>
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          Quantity: {item.quantity} - Price: ${item.price} each
        </Typography>
        <Typography variant="body1" color="primary">
          Total: ${(item.price * item.quantity).toFixed(2)}
        </Typography>
      </Typography>
      <Button
        onClick={() => handleRemove(item.id)}
        color="secondary"
        variant="outlined"
      >
        Remove
      </Button>
    </ListItem>
  );
};

export default CartItem;
