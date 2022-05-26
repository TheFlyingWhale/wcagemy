import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import App from "./pages/app/App";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import CompleteRegister from "./pages/completeRegister/completeRegister";
import Dashboard from "./pages/dashboard/dashboard";
import Certificate from "./pages/certificate/certificate";
import Settings from "./pages/settings/settings";
import CourseOverview from "./pages/courseOverview/courseOverview";
import ChapterMenu from "./pages/chapter/chapterMenu";
import Theory from "./pages/theory/theory";
import Quiz from "./pages/quiz/quiz";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="completeRegister" element={<CompleteRegister />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="certificate" element={<Certificate />} />
            <Route path="settings" element={<Settings />} />
            <Route path="course" element={<CourseOverview />} />
            <Route path="chapter" element={<ChapterMenu />} />
            <Route path="theory" element={<Theory />} />
            <Route path="quiz" element={<Quiz />} />
        </Routes>
    </BrowserRouter>
);
