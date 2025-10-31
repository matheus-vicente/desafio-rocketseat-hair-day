import { BrowserRouter, Route, Routes } from "react-router";
import { PageHome } from "./pages/page-home";
import { PageComponents } from "./pages/page-components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PageHome />} />
        <Route path="/componentes" element={<PageComponents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
