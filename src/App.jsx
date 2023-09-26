import React from "react";

//pages
import Home from "./Home";
import About from "./About";
import Faq from "./Faq";
import Contact from "./Contact";
import Careers, { careerLoader } from "./Careers";
import CareerDetails, { careerDetailsParameter } from "./CareerDetails";

//layout
import RootLayout from "./RootLayout";
import Help from "./Help";
import CareerLayout from "./CareerLayout";

//Router
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider 
} from "react-router-dom";
import CatchCareerError from "./CatchCareerError";





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>} >
      <Route path="/reactroutertester" element={<Home/>}/>
      <Route path="/reactroutertester/about" element={<About/>}/>

      <Route path="/reactroutertester/help" element={<Help/>}>
        <Route path="/reactroutertester/faq" element={<Faq/>}/>
        <Route path="/reactroutertester/contact" element={<Contact/>}/>
      </Route>

      <Route path="/reactroutertester/careers" element={<CareerLayout/>} errorElement={<CatchCareerError/>}>
        <Route 
          index
          element={<Careers/>}
          loader={careerLoader}
        />
        <Route 
          path=":id"
          element={<CareerDetails/>}
          loader={careerDetailsParameter}
        />
      </Route>
    </Route>
  ),
  { basename: "/reactroutertester" }
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
