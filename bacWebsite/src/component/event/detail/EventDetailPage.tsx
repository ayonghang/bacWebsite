import { Box, Button, Grid2, Typography } from "@mui/material";
import React from "react";
import { latestData } from "../../Data/latestNewsData";
import { useNavigate, useParams } from "react-router";
import { maxWidth } from "../../home/homePageConstant.js.js";
import Footer from "../../common/Footer.js";

interface Props {}

const EventDetailPage: React.FC<Props> = () => {
  const { eventId } = useParams();

  const navigate = useNavigate();

  const selectedEvent = latestData.filter((val) => val?.id === eventId);

  return (
    <>
      <div style={{ minHeight: "100vh" }}>
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            paddingTop: "200px",
            paddingRight: "20px",
            paddingLeft: "20px",
            marginBottom: "50px",
          }}>
          <Box sx={{ maxWidth: maxWidth }}>
            {selectedEvent?.length > 0 ? (
              <Grid2 container direction={"column"}>
                <Grid2
                  item
                  size={{ xs: 12 }}
                  sx={{ justifyContent: "center", display: "flex" }}>
                  <Typography variant="h6">{selectedEvent[0]?.name}</Typography>
                </Grid2>
                <Grid2
                  container
                  sx={{
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: {
                      xs: "column-reverse",
                      sm: "row",
                      md: "row",
                      lg: "row",
                    },
                  }}
                  spacing={2}>
                  <Grid2 item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <Typography variant="caption" sx={{ marginBottom: "20px" }}>
                      {selectedEvent[0]?.publishedDate}
                    </Typography>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: selectedEvent[0]?.detail,
                      }}
                    />
                    {selectedEvent[0]?.hasRegistrationLink && (
                      <Box
                        sx={{
                          width: "100%",
                          justifyContent: "center",
                          marginTop: "50px",
                        }}>
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#11181f",
                            borderColor: "#11181f",
                          }}
                          onClick={() => {
                            navigate(selectedEvent[0]?.link);
                          }}>
                          Register
                        </Button>
                      </Box>
                    )}
                  </Grid2>
                  <Grid2 item size={{ xs: 12, sm: 6, md: 6, lg: 6 }}>
                    <img
                      src={selectedEvent[0]?.poster}
                      style={{ width: "100%" }}
                    />
                  </Grid2>
                </Grid2>
              </Grid2>
            ) : (
              <Grid2 container>
                <Grid2 item xs={12}>
                  <Typography variant="h6">Event not found</Typography>
                </Grid2>
              </Grid2>
            )}
          </Box>
        </Box>
      </div>

      {/*Footer this is unique*/}
      <Grid2
        container
        size={{ xs: 12 }}
        sx={{
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          padding: "60px 0px",
          background: "#11181f",
        }}>
        <Grid2
          size={{ xs: 12 }}
          sx={{
            maxWidth: maxWidth,
            padding: { xs: "0px 20px", sm: "0px 15px", md: "0px 10px" },
          }}>
          <Footer />
        </Grid2>
      </Grid2>
    </>
  );
};

export default EventDetailPage;
