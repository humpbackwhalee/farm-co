import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router"


// Import 
import '../src/App/data/server'
import MainLayout from "./App/layout/MainLayout";

// Import Pages
import TheHomePage from "./App/pages/TheHomePage";
import TheDesignPage from "./App/pages/TheDesignPage";
import TheBlogPage from "./App/pages/TheBlogPage";
import BlogDetails from "./App/pages/BlogDetails";
import TheAboutUsPage from "./App/pages/TheAboutUsPage";

import IntroductionPage from "./App/pages/IntroductionPage";

import { LanguageProvider } from "./App/components/LanguageToggle";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} >
            <Route index element={<TheHomePage />} />
            <Route path="design" element={<TheDesignPage />} />
            <Route path="blog" element={<TheBlogPage />} />
            <Route path="blog/:id" element={<BlogDetails />} />
            <Route path="about" element={<TheAboutUsPage />} />
            <Route path="introduction" element={<IntroductionPage />} />
        </Route >
    )
)

function App() {
    return (
        <LanguageProvider>
            <RouterProvider router={router} />
        </LanguageProvider>
    )
}

export default App;