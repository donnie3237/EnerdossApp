import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RootLayout from "./Layout";
import One from "@/page/One";

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/one" element={<One />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
