import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ChartsAndMaps from "./pages/ChartsAndMaps";
import Layout from "./components/Layout";
import EditContact from "./pages/EditContact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<Contact />} />
        <Route path="/edit-contact/:id" element={<EditContact />} />
        <Route path="/charts-and-maps" element={<ChartsAndMaps />} />
      </Routes>
    </Layout>
  );
}

export default App;
