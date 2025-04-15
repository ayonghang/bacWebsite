import { createRoot } from "react-dom/client";
import HistoryPage from "./component/history/HistoryPage.tsx";
import HomePage from "./component/home/HomePage.tsx";
import Navigation from "./component/navigation/Navigation.tsx";
import "./index.css";
// @ts-ignore
import "@fontsource-variable/quicksand";
import NavDrawer from "./component/navigation/NavDrawer.tsx";
import SettingDrawerProvider from "./context/drawerContext.tsx";

import { createTheme, ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./component/common/PageNotFound.tsx";
import EventDetailPage from "./component/event/detail/EventDetailPage.tsx";
import ThreeKRunForm from "./component/event/registration/ThreeKRunForm.tsx";
import NACHomePage from "./component/nac/NACHomePage.tsx";
import TeamsPage from "./component/teams/TeamsPage.js.tsx";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Quicksand Variable",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <Router>
      <SettingDrawerProvider>
        <Navigation />
        <NavDrawer />
      </SettingDrawerProvider>

      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/event/2/register" element={<ThreeKRunForm />} />
        <Route path="/event/:eventId/detail" element={<EventDetailPage />} />

        <Route path="/nac/home" element={<NACHomePage />} />
        <Route path="/nac/standing" element={<NACHomePage />} />
        <Route path="/nac/registration" element={<NACHomePage />} />

        <Route path="/teams" element={<TeamsPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  </ThemeProvider>
);
