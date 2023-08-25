import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import HomePage from "../pages/HomePage";

function DvaultRoutes() {
  return (
    // <Router>
    <Routes>
      <Route
        path={"/"}
        //   element={
        //     <ProtectedRoutes>
        //       <SharedLayout />
        //     </ProtectedRoutes>
        //   }
      >
        <Route index element={<HomePage />} />
      </Route>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
    // </Router>
  );
}

export default DvaultRoutes;
