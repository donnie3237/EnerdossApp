import { Suspense } from "react";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Info from "./page/Info";
import NewProject from "./page/NewProject";
import PV from "./page/database/PV";
import Inverter from "./page/database/Inverter";
import Maps from "./page/database/Map";
import ErrorPage from "./page/Error";
import Main from "./page/new/Main";
import Atlas from "./page/tools/Atlas";
import Loss from "./page/tools/Loss";
function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
            <Route path="/" element={<NewProject />} />
            <Route path="/new" element={<NewProject />}>
              <Route index element={<Main />} />
              <Route path="new" element={<Main />} />
              <Route path="open" element={<Main />} />
            </Route>
            <Route path="/database">
              <Route index path="PV" element={<PV />} />
              <Route path="Inverter" element={<Inverter />} />
              <Route path="map" element={<Maps />} />
            </Route>
            <Route path="/info" element={<Info />} />
            <Route path="/tools">
              <Route index path="PV" element={<PV />} />
              <Route path="atlas" element={<Atlas />} />
              <Route path="loss" element={<Loss />} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
