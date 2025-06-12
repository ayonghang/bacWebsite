import { Grid2, Skeleton, Typography } from "@mui/material";
import React, { useState } from "react";
import { maxWidth } from "../../home/homePageConstant.js.ts";
import ReactPlayer from "react-player";
import { FormatQuoteSharp } from "@mui/icons-material";

interface Props {}

const NACHomePageWelcomeVideo: React.FC<Props> = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <Grid2
      size={{ xs: 12 }}
      container
      item
      sx={{
        width: "100%",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
      }}>
      <Grid2
        item
        container
        size={{ xs: 12 }}
        sx={{
          justifyContent: "center",
          //background: "#332F2F",
          background: `#83161c`,
        }}>
        <Grid2
          item
          container
          size={{ xs: 12 }}
          spacing={2}
          sx={{
            maxWidth: maxWidth,
            display: "flex",
            flexDirection: "row",
            padding: "50px 30px",
          }}>
          {/* Replace the ?href= link
          Also make sure the link contains the video ID
          https://www.facebook.com/baltimoreathleticclub/videos/1223570481754057/ */}
          <Grid2
            item
            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
            sx={{
              display: "flex",
              alignItems: "center",
            }}>
            {isLoading && (
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={"320px"}></Skeleton>
            )}
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/baltimoreathleticclub/videos/1223570481754057/&show_text=0`}
              width="100%"
              height="320px"
              style={{
                border: "none",
                overflow: "hidden",
                display: isLoading ? "none" : "block",
              }}
              onLoad={handleLoad}
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowTransparency={true}
              title="Facebook Video"></iframe>
          </Grid2>
          <Grid2
            item
            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}>
            <Typography variant="h6" sx={{ color: "white" }}>
              GOOD LUCK WISHES!
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "white", textIndent: "30px" }}>
              As the excitement builds and the competition draws near, our Team
              Advocate would like to take a moment to send a heartfelt message
              to our incredible team heading into the 2025 NAC Tournament.
            </Typography>

            <Grid2
              item
              sx={{ width: "100%", justifyContent: "center", display: "flex" }}>
              <FormatQuoteSharp
                sx={{
                  color: "#d99a32",
                  fontSize: "30px",
                  marginTop: "10px",
                  marginBottom: "5px",
                }}
              />
            </Grid2>
            <Typography
              variant="body2"
              sx={{
                color: "#afb1b3",
                padding: "0px 30px",
                textIndent: "30px",
                textAlign: "center",
              }}>
              To each and every one of you—your hard work, dedication, and
              teamwork have brought you this far, and now it’s time to put all
              of that passion into play. You've pushed through challenges, honed
              your skills, and stood by one another through every high and low.
              That unity and determination are what make this team so special.
            </Typography>
            <Grid2
              item
              size={{ xs: 12 }}
              sx={{
                color: "#eaeaeb",
                padding: "0px 30px",
                marginRight: "30px",
                marginTop: "10px",
                textAlign: "end",
              }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#eaeaeb",
                }}>
                - Bibek T
              </Typography>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default NACHomePageWelcomeVideo;
