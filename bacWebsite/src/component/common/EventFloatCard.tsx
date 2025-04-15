import { CloseSharp } from "@mui/icons-material";
import TodayIcon from "@mui/icons-material/Today";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Grid2,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { latestData } from "../Data/latestNewsData";
import { useNavigate } from "react-router";

interface Props {}

const EventFloatCard: React.FC<Props> = () => {
  const navigate = useNavigate();
  const [openEventCard, setOpenEventCard] = useState(false);

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const eventPositionRight = screenWidth / 2 - 175;

  return (
    <Grid2
      container
      sx={{
        position: "absolute",
        bottom: { xs: "15px", sm: "30px", md: "25%", lg: "25%" },
        right: {
          xs: eventPositionRight,
          sm: eventPositionRight,
          md: "60px",
          lg: "60px",
        },
        zIndex: "1000",
      }}>
      <Grid2
        container
        item
        xs={12}
        spacing={3}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
        }}>
        <Grid2
          item
          xs={12}
          sx={{ marginBottom: "10px", visibility: openEventCard && "hidden" }}>
          <Card sx={{ maxWidth: "350px" }}>
            <CardMedia
              sx={{ height: 160, objectFit: "contain" }}
              image={latestData[activeStep]?.poster}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {latestData[activeStep]?.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {latestData[activeStep]?.description}
              </Typography>
              <Box sx={{ width: "100%" }}>
                <Button
                  variant="contained"
                  sx={{ marginTop: "20px", background: "#11181f" }}
                  onClick={() => {
                    navigate(`/event/${latestData[activeStep]?.id}/detail`);
                  }}>
                  Detail
                </Button>
                {latestData[activeStep]?.hasRegistrationLink && (
                  <Button
                    variant="outlined"
                    sx={{
                      marginTop: "20px",
                      marginLeft: "20px",
                      color: "#11181f",
                      borderColor: "#11181f",
                    }}
                    onClick={() => {
                      navigate(latestData[activeStep]?.link);
                    }}>
                    Register
                  </Button>
                )}
              </Box>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <MobileStepper
                variant="dots"
                steps={latestData.length}
                position="static"
                activeStep={activeStep}
                sx={{ flexGrow: 1 }}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === latestData.length - 1}>
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}>
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </Button>
                }
              />
            </CardActions>
          </Card>
        </Grid2>

        <Grid2
          item
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}>
          <Fab
            aria-label="add"
            sx={{
              background: "#16233FC9",
              color: "white",
              "&:hover": { color: "white", background: "#14213D" },
            }}
            onClick={() => {
              setOpenEventCard(!openEventCard);
            }}>
            {openEventCard ? <TodayIcon /> : <CloseSharp />}
          </Fab>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default EventFloatCard;
