// import "./App.css";
import "./css/skins/blue.css";
import "./css/skins/brown.css";
import "./css/skins/default.css";
import "./css/skins/green-light-2.css";
import "./css/skins/green-light.css";
import "./css/skins/green.css";
import "./css/skins/olive.css";
import "./css/skins/purple.css";
import "./css/skins/red.css";
import "./css/skins/yellow-light.css";
import "./css/skins/yellow.css";
import "./css/skins/midnight-blue.css";

import "./css/animate.min.css";
import "./css/bootstrap-select.min.css";
import "./css/bootstrap-submenu.css";
import "./css/bootstrap.min.css";
import "./css/daterangepicker.css";
import "./css/dropzone.css";
import "./css/ie10-viewport-bug-workaround.css";
import "./css/jquery.mCustomScrollbar.css";
import "./css/leaflet.css";
import "./css/magnific-popup.css";
import "./css/map.css";
import "./css/rangeslider.css";
import "./css/slick.css";
import "./css/style.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages";
import { JobsList } from "./pages/job-list";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="page_loader"></div> */}
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index path="" element={<HomePage />} />
          <Route path="job-list" element={<JobsList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
