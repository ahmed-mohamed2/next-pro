import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import { Button } from "../Button";
import { Box } from "@mui/material";

const CustomCard = styled(Card)(({ theme }) => ({
  "& .MuiCard-root": {
    padding: "5px 5px 24px 20px",
  },
}));

export const ProductCard = () => {
  return (
    <CustomCard
      //   raised
      sx={{
        marginX: 20,
        maxWidth: 192,
        height: 339,
        borderRadius: "50",
        // backgroundColor: "red",
      }}
    >
      <CardHeader
        action={
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
      />
      {/* <Image
        src={{
          uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        }}
        width="152"
        height="50"
        alt="logo"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
        </Typography>
      </CardContent>
      <Button />
    </CustomCard>
  );
};
