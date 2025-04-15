import { FormatQuoteSharp } from "@mui/icons-material";
import {
  Box,
  Grid2,
  Link,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { Suspense, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import backgroundVideo from "../../assets/bacVideo.mp4";
import historyImage from "../../assets/historyImage.jpg";
import backgroundImage from "../../assets/mobileBackground.jpg";
import teamImage from "../../assets/teamImage.jpg";
import { latestData } from "../Data/latestNewsData.ts";
import EventFloatCard from "../common/EventFloatCard.tsx";
import Footer from "../common/Footer.tsx";
import ImageCard from "../common/ImageCard.tsx";
import SectionWrapper from "../common/SectionWrapper.tsx";
import ChampionshipSection from "./ChampionshipsSection.tsx";
import SmallNewsDisplay from "./SmallNewsDisplay.tsx";
import "./homePage.css";
import {
  defender,
  forward,
  goalKeepers,
  managementList,
  maxWidth,
  midfilder,
  others,
  playerList,
} from "./homePageConstant.js.js";
const LargeNewsDisplay = React.lazy(() => import("./LargeNewsDisplay.tsx"));

interface Props {}

const HomePage: React.FC<Props> = () => {
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location.pathname]); // Trigger when the route changes

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.up("md"));

  /* Remove when removing BANAElectionInfo */
  const [banaElectionDialog, setBanaElectionDialog] = useState(true);

  return (
    <Grid2 container>
      {/*   <BANAElectioninfo
        open={banaElectionDialog}
        setOpen={setBanaElectionDialog}
      /> */}

      <Grid2
        size={{ xs: 12 }}
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: { xs: "none", sm: "flex", md: "flex", lg: "flex" },
        }}>
        <video
          className="backgroundVideo"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <EventFloatCard />
      </Grid2>
      <Grid2
        size={{ xs: 12 }}
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          display: { xs: "flex", sm: "none" },
        }}>
        <img src={backgroundImage} />
        <EventFloatCard />
      </Grid2>
      <ChampionshipSection />

      <SectionWrapper
        title={"Latest"}
        isWhiteBackground={true}
        style={{ background: "#f2f2f2 !important" }}
        sectionComponent={
          <Grid2 container spacing={4}>
            {latestData.map((val, index) => (
              <>
                {index === 0 && (
                  <Grid2 size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
                    <Suspense fallback={<div>...Loading</div>}>
                      <LargeNewsDisplay
                        title={val?.name}
                        date={val?.publishedDate}
                        poster={val?.poster}
                        onClick={() => {
                          navigate(`/event/${val?.id}/detail`);
                        }}
                      />
                    </Suspense>
                  </Grid2>
                )}
              </>
            ))}

            <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
              <Grid2 container spacing={2}>
                {latestData.map((val, index) => (
                  <>
                    {index !== 0 && (
                      <Grid2 size={{ xs: 12, sm: 6, md: 12, lg: 12 }}>
                        <SmallNewsDisplay
                          title={val?.name}
                          date={val?.publishedDate}
                          poster={val?.poster}
                          onClick={() => {
                            navigate(`/event/${val?.id}/detail`);
                          }}
                        />
                      </Grid2>
                    )}
                  </>
                ))}
              </Grid2>
            </Grid2>
          </Grid2>
        }
      />

      <Grid2
        size={{ xs: 12 }}
        sx={{
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          background: "#FFFFFF",
        }}>
        <Grid2
          size={{ xs: 12 }}
          container
          sx={{
            maxWidth: maxWidth,
            padding: "50px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid2 item container sx={{ maxWidth: "500px" }}>
            <Grid2
              item
              sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
              <FormatQuoteSharp
                sx={{
                  color: "#d99a32",
                  fontSize: "30px",
                  marginBottom: "30px",
                }}
              />
            </Grid2>

            <Grid2
              item
              sx={{
                width: "100%",
                justifyContent: "center",
                display: "flex",
                textAlign: "center",
              }}>
              <Typography variant="h6">
                Champions don't become champions when they win an event, but in
                the hours, weeks, months, and years they spend preparing for it.
              </Typography>
            </Grid2>

            <Grid2
              item
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                textAlign: "center",
                flexDirection: "column",
                marginTop: "50px",
              }}>
              <div
                style={{
                  width: "30px",
                  borderBottom: "solid 2px #d99a32",
                  margin: "5px 0px",
                }}
              />
              <Typography variant="body1">Michael Jordan</Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2
        size={{ xs: 12 }}
        sx={{
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
          background: "#f2f2f2",
          marginBottom: "80px",
        }}>
        <Grid2
          size={{ xs: 12 }}
          sx={{
            maxWidth: maxWidth,
            padding: "50px 0px",
          }}>
          <Grid2 container spacing={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                background: "white",
              }}>
              <Grid2 container spacing={4} sx={{ maxWidth: "1200px" }}>
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
                  <ImageCard
                    source={teamImage}
                    style={{ objectFit: "cover" }}
                    width={"100%"}
                    height={isMd ? "500px" : isSm ? "200px" : "500px"}
                  />
                </Grid2>
                <Grid2
                  size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                  sx={{
                    padding: {
                      xs: "20px",
                      sm: "20px",
                      md: "0px",
                      lg: "0px",
                    },
                  }}>
                  <Grid2 container spacing={2}>
                    <Grid2
                      size={{ xs: 12 }}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "20px",
                        marginTop: "20px",
                      }}>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: 600, fontSize: "25px" }}>
                        2025 TEAM ROSTER
                      </Typography>
                    </Grid2>
                  </Grid2>

                  {/**
                   * Team List
                   *
                   */}
                  <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                      <Typography variant={"h5"}>FORWARDS</Typography>
                      <Grid2 container>
                        {playerList.map((player) => (
                          <Grid2 item xs={12} sx={{ width: "100%" }}>
                            {player?.position === forward && (
                              <Typography variant={"h7"} sx={{ width: "100%" }}>
                                <span
                                  style={{ color: "red", margin: "0px 10px" }}>
                                  {player?.jerseyNumber}
                                </span>
                                {`${player?.firstName} ${player?.lastName}`}
                              </Typography>
                            )}
                          </Grid2>
                        ))}
                      </Grid2>

                      <Typography variant={"h5"} sx={{ marginTop: "20px" }}>
                        MIDFIELDERS
                      </Typography>
                      <Grid2 container>
                        {playerList.map((player) => (
                          <Grid2 item xs={12} sx={{ width: "100%" }}>
                            {player?.position === midfilder && (
                              <Typography variant={"h7"} sx={{ width: "100%" }}>
                                <span
                                  style={{ color: "red", margin: "0px 10px" }}>
                                  {player?.jerseyNumber}
                                </span>
                                {`${player?.firstName} ${player?.lastName}`}
                              </Typography>
                            )}
                          </Grid2>
                        ))}
                      </Grid2>
                    </Grid2>
                    <Grid2 size={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                      <Typography variant={"h5"}>DEFENDERS</Typography>
                      <Grid2 container>
                        {playerList.map((player) => (
                          <Grid2 item xs={12} sx={{ width: "100%" }}>
                            {player?.position === defender && (
                              <Typography variant={"h7"} sx={{ width: "100%" }}>
                                <span
                                  style={{ color: "red", margin: "0px 10px" }}>
                                  {player?.jerseyNumber}
                                </span>
                                {`${player?.firstName} ${player?.lastName}`}
                              </Typography>
                            )}
                          </Grid2>
                        ))}
                      </Grid2>
                      <Typography variant={"h5"} sx={{ marginTop: "20px" }}>
                        GOALKEEPERS
                      </Typography>
                      <Grid2 container>
                        {playerList.map((player) => (
                          <Grid2 item xs={12} sx={{ width: "100%" }}>
                            {player?.position === goalKeepers && (
                              <Typography variant={"h7"} sx={{ width: "100%" }}>
                                <span
                                  style={{ color: "red", margin: "0px 10px" }}>
                                  {player?.jerseyNumber}
                                </span>
                                {`${player?.firstName} ${player?.lastName}`}
                              </Typography>
                            )}
                          </Grid2>
                        ))}
                      </Grid2>

                      <Typography variant={"h5"} sx={{ marginTop: "20px" }}>
                        OTHERS
                      </Typography>
                      <Grid2 container>
                        {playerList.map((player) => (
                          <Grid2 item xs={12} sx={{ width: "100%" }}>
                            {player?.position === others && (
                              <div
                                style={{
                                  margin: "0px 10px",
                                  display: "flex",
                                  flexDirection: "column",
                                }}>
                                <Typography variant={"h7"}>
                                  {`${player?.firstName} ${player?.lastName}`}
                                </Typography>
                                <Typography
                                  variant={"caption"}
                                  color={"textSecondary"}>
                                  {player?.abbreviation}
                                </Typography>
                              </div>
                            )}
                          </Grid2>
                        ))}
                      </Grid2>
                    </Grid2>
                  </Grid2>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Grid2>

      {/* ------ This is the Team section ---------- */}

      <SectionWrapper
        title={"History"}
        isWhiteBackground={true}
        sectionComponent={
          <Grid2 container spacing={4}>
            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <Typography variant={"h6"}>BAC Mission Statement</Typography>
              <Typography variant={"body1"}>
                &emsp;&emsp;The Baltimore Athletic Club (BAC), established in
                2008, was founded with a unique mission to serve the Nepali
                youth in the Baltimore area, using soccer as a tool to inspire
                and empower them. Recognizing the challenges faced by many
                immigrant communities, particularly Nepali youth, the club aimed
                to provide a supportive environment where young people could
                develop both athletic skills and personal growth.
              </Typography>
              <Typography variant={"body1"} sx={{ marginTop: "10px" }}>
                &emsp;&emsp;Through soccer, the BAC not only fostered physical
                fitness and teamwork but also encouraged discipline, leadership,
                and cultural integration. The club organized soccer leagues,
                coaching programs, and community events to help Nepali youth
                build confidence, stay active, and stay connected to their
                heritage while embracing opportunities in their new community.
              </Typography>
              <Typography variant={"body1"} sx={{ marginTop: "10px" }}>
                &emsp;&emsp;Over time, the club has grown into a vital part of
                the Nepali diaspora in Baltimore, offering mentorship, social
                support, and a sense of belonging through the universal language
                of soccer. The BAC continues to inspire young people to pursue
                excellence on and off the field, making a lasting impact on
                their lives.
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
              <ImageCard
                source={historyImage}
                width={"100%"}
                height={isMd ? "600px" : isSm ? "200px" : "500px"}
                style={{ objectFit: "cover" }}
              />
            </Grid2>
          </Grid2>
        }
      />

      <SectionWrapper
        title={"Management"}
        isWhiteBackground={true}
        sectionComponent={
          <Grid2
            container
            spacing={6}
            sx={{ justifyContent: "center", display: "flex", padding: "20px" }}>
            {managementList.map((ml) => (
              <Grid2
                size={{ xs: 6, sm: 4, md: 3, lg: 3 }}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <img
                  src={ml?.image}
                  style={{
                    maxWidth: "100%",
                    borderRadius: "50%",
                    objectFit: "contain",
                    padding: "20px",
                  }}
                />
                <Typography variant="caption">{ml?.position}</Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  {ml?.name}
                </Typography>

                <Link
                  href={`mailto:$${ml?.email}`}
                  variant="body2"
                  sx={{
                    color: "#14213D",
                    overflowWrap: "anywhere",
                    textAlign: "center",
                  }}>
                  {ml?.email}
                </Link>
                <Link
                  href={`tel:${ml?.phone}`}
                  variant="body2"
                  sx={{ color: "#14213D", textAlign: "center" }}>
                  {ml?.formattedPhone}
                </Link>
              </Grid2>
            ))}
          </Grid2>
        }
      />

      {/*Footer this is unique*/}
      <Grid2
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
    </Grid2>
  );
};

export default HomePage;
