import React from "react";
import { Card, Grid2, Typography } from "@mui/material";
import ImageCard from "./ImageCard.tsx";
import background from "../../assets/backgroundRed.png";
import Box from "@mui/material/Box";

interface Props {
  firstName: string;
  lastName: string;
  position: string;
  jerseyNumber: string;
}

const PlayerCard: React.FC<Props> = ({
  firstName,
  lastName,
  position,
  jerseyNumber,
  src,
}) => {
  return (
    <Card>
      <Grid2 container>
        <Grid2 size={{ xs: 12 }} sx={{ height: "300px", position: "relative" }}>
          <ImageCard
            source={src}
            width={"100%"}
            height={"100%"}
            style={{ objectFit: "cover" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12 }}
          container
          sx={{
            padding: "20px",
            justifyContent: "center",
            display: "flex",
          }}>
          <Grid2
            item
            size={{ xs: 12 }}
            container
            spacing={1}
            sx={{ display: "flex", justifyContent: "center" }}>
            <Grid2 item>
              <Typography
                variant={"body1"}
                sx={{ fontWeight: 500, fontSize: "15px", color: "#b10000" }}>
                {jerseyNumber}
              </Typography>
            </Grid2>
            <Grid2 item>
              <Typography
                variant={"body1"}
                sx={{ fontWeight: 500, fontSize: "15px", color: "#b10000" }}>
                {firstName} {lastName}
              </Typography>
            </Grid2>
          </Grid2>

          <Grid2
            item
            size={{ xs: 12 }}
            sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant={"body1"}
              sx={{ fontWeight: 500, fontSize: "10px", color: "#bdbdbd" }}>
              {position}
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Card>
  );
};

export default PlayerCard;
