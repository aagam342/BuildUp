import React, { useState } from "react";
import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const RatingColors = () => {
  const [value, setValue] = useState(null);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <div className="flex pr-4">
        <p className="text-lg px-6">Delivery</p>
        <Rating
          size="large"
          value={4.5}
          precision={0.5}
          onChange={handleChange}
          className="ml-auto"
        />
      </div>
      <div className="flex pr-4">
        <p className="text-lg px-6">Quality</p>
        <Rating
          size="large"
          value={4}
          precision={0.5}
          onChange={handleChange}
          className="ml-auto"
        />
      </div>
      <div className="flex pr-4">
        <p className="text-lg px-6">Responsiveness</p>
        <Rating
          size="large"
          value={2.5}
          precision={0.5}
          onChange={handleChange}
          className="ml-auto"
        />
      </div>
      <div className="flex pr-4">
        <p className="text-lg px-6">Price Competitiveness</p>
        <Rating
          size="large"
          value={3.5}
          precision={0.5}
          onChange={handleChange}
          className="ml-auto"
        />
      </div>
    </Stack>
  );
};

export default RatingColors;
