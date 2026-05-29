import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import FilterPage from "./pages/FilterPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import JobPostPage from "./pages/JobPostPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="jobs" element={<FilterPage />} />
            <Route path="job/:id" element={<JobDetailsPage />} />
            <Route path="job/post" element={<JobPostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
