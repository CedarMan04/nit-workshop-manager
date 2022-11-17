import CustomBackdrop from "components/atoms/Backdrop";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Top = lazy(() => import("components/pages/Top"));

function loading() {
  return <CustomBackdrop open={true} />;
}

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading()}>
        <Routes>
          <Route path={"/"} element={<Top />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
