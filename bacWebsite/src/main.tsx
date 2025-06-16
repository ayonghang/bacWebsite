import { createRoot } from "react-dom/client";
import HistoryPage from "./component/history/HistoryPage.tsx";
import HomePage from "./component/home/HomePage.tsx";
import Navigation from "./component/navigation/Navigation.tsx";
import "./index.css";
// @ts-ignore
import "@fontsource-variable/quicksand";
import NavDrawer from "./component/navigation/NavDrawer.tsx";
import SettingDrawerProvider from "./context/drawerContext.tsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createTheme, ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageNotFound from "./component/common/PageNotFound.tsx";
import EventDetailPage from "./component/event/detail/EventDetailPage.tsx";
import ThreeKRunForm from "./component/event/registration/ThreeKRunForm.tsx";
import NACHomePage from "./component/nac/NACHomePage.tsx";
import TeamsPage from "./component/teams/TeamsPage.js.tsx";
import NACStandingPage from "./component/nac/NACStandingPage.tsx";
import AdminPage from "./component/admin/tournament/AdminPage.tsx";
import UpdateTournament from "./component/admin/updateTournament/UpdateTournament.tsx";
import UpdateTournamentContextProvider from "./context/updateTournamentContext.tsx";
import { ToastContainer } from "react-toastify";

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
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Router>
        <SettingDrawerProvider>
          <Navigation />
          <NavDrawer />
        </SettingDrawerProvider>

        <ToastContainer
          position="top-right"
          autoClose={false}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{ marginTop: "140px" }}
        />
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/event/2/register" element={<ThreeKRunForm />} />
          <Route path="/event/:eventId/detail" element={<EventDetailPage />} />

          <Route path="/nac/home" element={<NACHomePage />} />
          <Route path="/nac/standing" element={<NACStandingPage />} />
          <Route path="/nac/registration" element={<NACHomePage />} />
          <Route path="/nac/admin" element={<AdminPage />} />
          <Route
            path="/nac/admin/:id"
            element={
              <UpdateTournamentContextProvider>
                <UpdateTournament />
              </UpdateTournamentContextProvider>
            }
          />

          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  </QueryClientProvider>
);
