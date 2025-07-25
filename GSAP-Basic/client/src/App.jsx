import React from 'react';
import GsapTo from "./pages/GsapTo.jsx";
import GsapFrom from "./pages/GsapFrom.jsx";
import GsapFromTo from "./pages/GsapFromTo.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import GsapTimeline from "./pages/GsapTimeline.jsx";
import GsapStagger from "./pages/GsapStagger.jsx";
import GsapScrollTrigger from "./pages/GsapScrollTrigger.jsx";
import GsapText from "./pages/GsapText.jsx";

const App = () => {
    return (
       <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gsapTo" element={<GsapTo />} />
                <Route path="/gsapFrom" element={<GsapFrom />} />
                <Route path="/gsapFromTo" element={<GsapFromTo />} />
                <Route path="/gsapTimeline" element={<GsapTimeline />} />
                <Route path="/gsapStagger" element={<GsapStagger />} />
                <Route path="/gsapScrollTrigger" element={<GsapScrollTrigger />} />
                <Route path="/gsapText" element={<GsapText />} />

            </Routes>
        </BrowserRouter>
       </>
    );
};

export default App;