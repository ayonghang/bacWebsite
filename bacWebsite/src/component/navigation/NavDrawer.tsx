import { ExpandMore } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Collapse, Grid2, IconButton, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useContext } from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/bacLogo.png";
import { SettingDrawerContext } from "../../context/drawerContext.tsx";
import { routeList } from "../common/navigationConstant.ts";

export default function NavDrawer() {
  const { isDrawerOpen, setIsDrawerOpen } = useContext(SettingDrawerContext);
  const toggleDrawer = (newOpen: boolean) => () => {
    setIsDrawerOpen(newOpen);
  };

  const navigate = useNavigate();

  const DrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <Grid2
        container
        sx={{
          textAlign: "left",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "20px",
        }}>
        <Grid2 sx={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ width: "50px", height: "50px" }}
            src={logo}
            alt="Logo"
          />
        </Grid2>

        <Grid2
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            marginTop: "10px",
          }}>
          <Typography
            variant={"body2"}
            sx={{
              marginTop: "0.5px",
              fontSize: "xx-small",
              color: "#FFFFFF",
            }}>
            BALTIMORE ATHLETIC CLUB
          </Typography>
          <Typography
            variant={"body2"}
            sx={{
              color: "#FFFFFF",
              fontWeight: "200",
              fontSize: "7px",
            }}>
            EST. 2008
          </Typography>
        </Grid2>
      </Grid2>

      <List>
        {routeList.map((text, index) => (
          <>
            {!text?.hasChildren ? (
              <ListItem
                key={text}
                disablePadding
                sx={{ "&:hover": { background: "#233761" } }}>
                <ListItemButton
                  onClick={() => {
                    navigate(text?.link);
                  }}>
                  <ListItemText
                    primary={text?.label}
                    sx={{ color: "#FFFFFF", fontSize: "10px" }}
                  />
                  <ArrowForwardIosIcon
                    sx={{ fontSize: "10px", color: "#FFFFFF" }}
                  />
                </ListItemButton>
              </ListItem>
            ) : (
              <>
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ "&:hover": { background: "#233761" } }}>
                  <ListItemButton
                    disabled
                    onClick={() => {
                      navigate(text?.link);
                    }}>
                    <ListItemText
                      primary={text?.label}
                      sx={{ color: "#FFFFFF", fontSize: "10px" }}
                    />
                    <ExpandMore sx={{ fontSize: "15px", color: "#FFFFFF" }} />
                  </ListItemButton>
                </ListItem>
                <Collapse in={true} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {text?.children.map((child) => (
                      <ListItem
                        key={child}
                        disablePadding
                        sx={{
                          "&:hover": { background: "#233761" },
                          paddingLeft: "15px",
                        }}>
                        <ListItemButton
                          onClick={() => {
                            navigate(child?.link);
                          }}>
                          <ListItemText
                            primary={child?.label}
                            sx={{ color: "#FFFFFF", fontSize: "10px" }}
                          />
                          <ArrowForwardIosIcon
                            sx={{ fontSize: "10px", color: "#FFFFFF" }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            )}
          </>
        ))}
      </List>

      <Grid2 container>
        <Grid2
          size={{ xs: 12 }}
          sx={{
            textAlign: "center",
            marginTop: { xs: "30px", sm: "0px", md: "0px", lg: "0px" },
          }}>
          <Typography
            variant={"body1"}
            sx={{ fontWeight: 600, color: "#FFFFFF" }}>
            Contact
          </Typography>
          <a href={"tel:+14109674095"} style={{ textDecoration: "none" }}>
            <Typography variant={"body2"} sx={{ color: "#FFFFFF" }}>
              +1 (410) 967-4095
            </Typography>
          </a>
          <a
            href={"mailto:baltimoreathleticclub@gmail.com"}
            style={{ textDecoration: "none" }}>
            <Typography variant={"body2"} sx={{ color: "#FFFFFF" }}>
              baltimoreathleticclub@gmail.com
            </Typography>{" "}
          </a>
        </Grid2>
      </Grid2>

      <Grid2 container>
        <Grid2
          size={{ xs: 12 }}
          sx={{ justifyContent: "center", display: "flex", marginTop: "10px" }}>
          <Grid2 container spacing={2}>
            <Grid2>
              <IconButton onClick={() => window.open(facebookLink, "_blank")}>
                <FacebookIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
            </Grid2>
            <Grid2>
              <IconButton onClick={() => window.open(instagramLink, "_blank")}>
                <InstagramIcon sx={{ color: "#FFFFFF" }} />
              </IconButton>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  );

  return (
    <Drawer
      open={isDrawerOpen}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: 100000,
        "& .MuiDrawer-paper": { background: "#11181f" },
      }}>
      {DrawerList}
    </Drawer>
  );
}
