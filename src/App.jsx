import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router"


// Import 
import MainLayout from "./App/layout/MainLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} >
        </Route >
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App;