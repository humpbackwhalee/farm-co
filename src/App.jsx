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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} >
            <Route index element={<TheHomePage />} />
        </Route >
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;