import { Chip, Divider, Grid2, Paper } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import StadiumIcon from "@mui/icons-material/Stadium";
import PlaceIcon from "@mui/icons-material/Place";

interface Props {}
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const GameList = ({ gameList }) => {
  return (
    <>
      {[1, 2].map((date) => (
        <Grid2 container spacing={1} sx={{ marginTop: "20px" }}>
          <Grid2 item size={{ xs: 12 }}>
            <Typography variant="h6">Sunday 20th 2025</Typography>
          </Grid2>
          <Grid2 item size={{ xs: 12 }}>
            <Grid2 container>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((game) => (
                <>
                  <Grid2
                    item
                    container
                    size={{ xs: 12 }}
                    sx={{
                      "&:hover": { background: "#f4f4f4" },
                      padding: "20px 0px",
                    }}>
                    <Grid2
                      container
                      item
                      size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                      spacing={1}>
                      <Grid2
                        item
                        size={{ xs: 4, sm: 4, md: 4.5, lg: 5 }}
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          alignItems: "center",
                        }}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "end", fontWeight: 700 }}>
                          BAC
                        </Typography>
                      </Grid2>
                      <Grid2
                        item
                        size={{ xs: 4, sm: 4, md: 3, lg: 2 }}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Chip
                          label={"12:00 AM"}
                          variant="outlined"
                          sx={{ borderRadius: "5px" }}
                        />
                      </Grid2>
                      <Grid2
                        item
                        size={{ xs: 4, sm: 4, md: 4.5, lg: 5 }}
                        sx={{
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                        }}>
                        <Typography
                          variant="body2"
                          sx={{ textAlign: "start", fontWeight: 700 }}>
                          BAC
                        </Typography>
                      </Grid2>
                    </Grid2>
                    <Grid2
                      container
                      item
                      size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                      sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        textAlign: "center",
                      }}
                      spacing={1}>
                      <Grid2
                        item
                        size={{ xs: 12 }}
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                        }}>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                          }}>
                          <StadiumIcon
                            sx={{ fontSize: "12px", marginRight: "5px" }}
                          />
                          Field 2
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            marginLeft: "10px",
                          }}>
                          <PlaceIcon
                            sx={{ fontSize: "12px", marginRight: "5px" }}
                          />
                          1233 Berk Ave Rosedale MD, 21237
                        </Typography>
                      </Grid2>
                    </Grid2>
                  </Grid2>

                  <Grid2 item size={{ xs: 12 }}>
                    <Divider />
                  </Grid2>
                </>
              ))}
            </Grid2>{" "}
          </Grid2>
        </Grid2>
      ))}
    </>
  );
};

const NACStandingKnockoutStage: React.FC<Props> = () => {
  const [expandedQuater, setExpandQuater] = React.useState(true);
  const [expandedSemi, setExpandSemi] = React.useState(false);
  const [expandedFinal, setExpandFinal] = React.useState(false);

  const handleQuaterChange = (event, newExpanded) => {
    setExpandQuater(!expandedQuater);
  };

  const handleSemiChange = (event, newExpanded) => {
    setExpandSemi(!expandedSemi);
  };

  const handleFinalChange = (event, newExpanded) => {
    setExpandFinal(!expandedFinal);
  };
  return (
    <Grid2 container>
      {/* Quater Final */}
      <Grid2 item size={{ xs: 12 }}>
        <Accordion expanded={expandedQuater} onChange={handleQuaterChange}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography component="span">Quater Final</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <GameList gameList={[]}></GameList>
          </AccordionDetails>
        </Accordion>
      </Grid2>

      {/* Semi Final */}
      <Accordion expanded={expandedSemi} onChange={handleSemiChange}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span">Semi Final</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GameList gameList={[]}></GameList>
        </AccordionDetails>
      </Accordion>

      {/* Final */}

      <Accordion expanded={expandedFinal} onChange={handleFinalChange}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">Final</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GameList gameList={[]}></GameList>
        </AccordionDetails>
      </Accordion>
    </Grid2>
  );
};

export default NACStandingKnockoutStage;
