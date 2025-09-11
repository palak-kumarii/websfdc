import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import FAQs from "./FAQs";
import NotFound from "./NotFound";

import Service from "./Service";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Master from "./Layout/Master";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Master/>}/>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/FAQs" element={<FAQs />} />
     
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;