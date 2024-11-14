
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Home } from "./pages/Home";
import { FeeStructure } from "./components/common/FeeStructure";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Blog } from "./pages/Blog";
import { Training } from "./pages/Training";
import ApplyForm from "./components/common/applyForm";


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/courses"
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />
          <Route
            path="/training"
            element={
              <Layout>
                <Training />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/feeStructure"
            element={
              <Layout>
                <FeeStructure />
              </Layout>
            }
          />
          <Route
          path="/applyNow"
          element={
            <Layout>
              <ApplyForm/>
            </Layout>
          }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
