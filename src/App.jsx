import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router"

import { ErrorBoundary } from 'react-error-boundary';
import { Helmet } from 'react-helmet';


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
import Feedback from "./App/components/FeedbackBox";


// Import LanguageToggle
import { LanguageProvider } from "./App/components/LanguageContext";

// Add ErrorComponent definition
const ErrorComponent = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-red-600 mb-4">
                    Oops! Something went wrong
                </h2>
                <p className="text-gray-600 mb-4">
                    We're sorry, but there was an error loading this page.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                >
                    Refresh Page
                </button>
            </div>
        </div>
    );
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} >
            <Route index element={<TheHomePage />} />
            <Route path="design" element={<TheDesignPage />} />
            <Route path="blog" element={<TheBlogPage />} />
            <Route path="blog/:id" element={<BlogDetails />} />
            <Route path="about" element={<TheAboutUsPage />} />
            <Route path="introduction" element={<IntroductionPage />} />
            <Route path="feedback" element={<Feedback />} />
        </Route >
    )
)

function App() {
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorComponent}>
                <Helmet>
                    <title>Garden Planner - Design Your Dream Garden</title>
                    <meta name="description" content="Plan your perfect garden with our easy-to-use tools" />
                </Helmet>
                <LanguageProvider>
                    <RouterProvider router={router} />
                </LanguageProvider>
            </ErrorBoundary>
        </>
    )
}

export default App;