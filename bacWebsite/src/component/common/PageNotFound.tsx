import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import { maxWidth } from "../home/homePageConstant.js.js";
import { useNavigate } from "react-router";

interface Props {}

const PageNotFound: React.FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100vw",
        justifyContent: "center",
        display: "flex",
        paddingTop: "250px",
      }}>
      <Box sx={{ width: maxWidth, justifyContent: "center", display: "flex" }}>
        <Grid2 container direction={"column"}>
          <Grid2
            item
            size={{ xs: 12 }}
            sx={{ justifyContent: "center", display: "flex" }}>
            <Typography variant="h1">404</Typography>
          </Grid2>
          <Grid2
            item
            size={{ xs: 12 }}
            sx={{ justifyContent: "center", display: "flex" }}>
            <Typography variant="body1">Page Not Found</Typography>
          </Grid2>
          <Grid2
            item
            size={{ xs: 12 }}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              marginTop: "30px",
              flexDirection: "column",
            }}>
            <Typography
              variant="caption"
              sx={{ width: "400px", textAlign: "center" }}>
              If you could not find what you are looking for, you can find us
              sunday @ carver high school (Towson) 8:00 AM.
            </Typography>

            <Button
              variant="contained"
              sx={{ width: "150px", marginTop: "20px", background: "#11181f" }}
              onClick={() => {
                navigate("/");
              }}>
              Home
            </Button>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default PageNotFound;
