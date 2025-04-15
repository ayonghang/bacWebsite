import { Facebook, Instagram } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid2, IconButton, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import logo from "../../assets/bacLogo.png"; // Tell webpack this JS file uses this image
import { SettingDrawerContext } from "../../context/drawerContext.tsx";
import { routeList } from "../common/navigationConstant.ts";
import { facebookLink, instagramLink } from "../Data/socialMediaLinks.ts";

interface Props {}

const Navigation: React.FC<Props> = () => {
  const [hasScrolledDown, setHasScrolledDown] = useState(false);

  const {
    setIsDrawerOpen,
    displayChildren,
    setDisplayChildren,
    childrenLinks,
    setChildrenLinks,
    selectedLink,
    setSelectedLink,
  } = useContext(SettingDrawerContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolledDown(true);
      } else {
        setHasScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const location = useLocation();

  const navigate = useNavigate();

  // noinspection TypeScriptValidateTypes
  return (
    <>
      <Grid2
        id={"navigationWrapper"}
        container
        sx={{
          position: "fixed",
          width: "100%",
          justifyContent: "center",
          alignContent: "center",
          zIndex: 10000,
          background: "#FFFFFF",
          boxShadow: hasScrolledDown
            ? "0px 7px 5px 4px rgba(72, 77, 77, 0.7)"
            : "0px 1px 8px 2px rgba(72, 77, 77, 0.7)",
        }}>
        {/**
         * Social Media Easier access
         */}
        <Grid2
          container
          sx={{
            width: "100%",
            background: "#11181f",
          }}>
          <Grid2
            item
            container
            size={{ xs: 12 }}
            sx={{
              padding: "0px 20px",
              justifyContent: "end",
              display: "flex",
            }}>
            <Grid2>
              <IconButton onClick={() => window.open(facebookLink, "_blank")}>
                <Facebook sx={{ color: "#FFFFFF" }} size={"small"} />
              </IconButton>
            </Grid2>
            <Grid2>
              <IconButton onClick={() => window.open(instagramLink, "_blank")}>
                <Instagram sx={{ color: "#FFFFFF" }} size={"small"} />
              </IconButton>
            </Grid2>
          </Grid2>
        </Grid2>

        {/**
         * Main Menu content
         */}
        <div
          style={{
            width: "1200px",
            display: "flex",
          }}>
          {/*Logo*/}
          <Grid2
            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
            sx={{
              alignItems: "center",
              display: "flex",
              padding: { xs: "20px 0px", sm: "20px 0px", md: "0px", lg: "0px" },
            }}>
            <Grid2 container sx={{ textAlign: "left", marginLeft: "20px" }}>
              <Grid2>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={logo}
                  alt="Logo"
                />
              </Grid2>

              <Grid2 sx={{ marginLeft: "5px" }}>
                <Typography
                  variant={"body2"}
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                  }}>
                  BAC
                </Typography>
                <Typography
                  variant={"body2"}
                  sx={{
                    marginTop: "0.5px",
                    fontSize: "xx-small",
                  }}>
                  BALTIMORE ATHLETIC CLUB
                </Typography>
                <Typography
                  variant={"body2"}
                  sx={{
                    fontWeight: "200",
                    fontSize: "7px",
                  }}>
                  EST. 2008
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>

          {/*menu link*/}
          <Grid2
            id={"navigationTabsSection"}
            size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
            sx={{
              alignContent: "center",
              display: "flex",
              justifyContent: "right",
              width: { xs: "25%", sm: "50%", md: "100%" },
              paddingRight: { xs: "10px", sm: "10px", md: "20px", lg: "0px" },
              alignItems: "center",
            }}>
            {/*list of menu gets display for medium screen*/}
            <Grid2
              container
              spacing={6}
              justifyContent={"right"}
              sx={{
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" }, // this will hide if screen is small
              }}>
              <Grid2
                sx={{
                  visibility: "hidden",
                  borderBottom: "solid 3px #b10000",
                  padding: "0px 5px",
                }}>
                <Typography
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    margin: "20px 0px",
                  }}>
                  T
                </Typography>
                <div
                  className={"child"}
                  style={{
                    width: "100%",
                    height: "5px",
                    background: "#C10000",
                    visibility: "hidden",
                  }}
                />
              </Grid2>

              {routeList.map((nav) => (
                <Grid2
                  sx={{
                    "&:hover": { borderBottom: "solid 3px #b10000" },
                    padding: "0px 5px",
                    borderBottom:
                      selectedLink === nav?.link && "solid 3px #b10000",
                  }}
                  onClick={() => {
                    if (!nav?.hasChildren) {
                      setSelectedLink(nav?.link);
                      setDisplayChildren(false);
                      setChildrenLinks([]);
                      navigate(nav?.link);
                    } else {
                      setSelectedLink(nav?.link);
                      setDisplayChildren(true);
                      setChildrenLinks(nav?.children);
                    }
                  }}>
                  <Typography
                    variant="body1"
                    sx={{
                      cursor: "pointer",
                      margin: "20px 0px",
                    }}>
                    {nav?.label}
                  </Typography>
                  <div
                    className={"child"}
                    style={{
                      width: "100%",
                      height: "5px",
                      background: "#C10000",
                      visibility: "hidden",
                    }}
                  />
                </Grid2>
              ))}
            </Grid2>

            {/*Icon button displays when small screen*/}
            <Grid2
              id={"testTheStuff"}
              container
              sx={{
                width: "50px",
                height: "50px",
                //background: "green",
                display: { xs: "block", sm: "block", md: "none", lg: "none" }, // this will hide if screen is small
              }}>
              <IconButton
                onClick={() => {
                  setIsDrawerOpen(true);
                }}>
                <MenuIcon />
              </IconButton>
            </Grid2>
          </Grid2>
        </div>

        {/**
         * Border and Children Menu
         */}
        {displayChildren && (
          <Grid2
            container
            sx={{
              display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              width: "100%",
              justifyContent: "center",
            }}>
            <div
              style={{
                width: "100%",
                background: "green",
                borderBottom: "solid 0.5px gray",
              }}
            />

            <Grid2
              container
              spacing={2}
              sx={{
                width: "1200px",
                justifyContent: "center",
              }}>
              {childrenLinks?.map((val) => (
                <Grid2
                  item
                  sx={{
                    "&:hover": { borderTop: "solid 2px black" },
                    borderTop:
                      location?.pathname === val?.link && "solid 2px black",
                    padding: "10px 0px",
                  }}
                  onClick={() => {
                    navigate(val?.link);
                  }}>
                  <Typography
                    variant="body1"
                    sx={{
                      cursor: "pointer",
                      padding: "0px 20px",
                      color: "rgba(72, 77, 77, 0.7)",
                    }}>
                    {val?.label}
                  </Typography>
                </Grid2>
              ))}
              <Grid2
                item
                sx={{
                  visibility: "hidden",
                  borderTop: "solid 2px black",
                  padding: "10px 0px",
                }}>
                <Typography
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    padding: "0px 20px",
                  }}>
                  T
                </Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        )}
      </Grid2>
    </>
  );
};

export default Navigation;
