// import React from "react";
// import BasicInfoForm from "./components/BasicInfoForm";

// function App() {
//   return (
//     <div>
//       <BasicInfoForm />
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BasicInfoForm from "./components/BasicInfoForm";
import FormsPage from "./components/FormsPage";
import ViewForm from "./components/ViewForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home → Your Main Form */}
        <Route path="/" element={<BasicInfoForm />} />

        {/* Page to show Completed + InProgress buttons */}
        <Route path="/forms" element={<FormsPage />} />

        {/* Single form view/edit */}
        <Route path="/form/:id" element={<ViewForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
