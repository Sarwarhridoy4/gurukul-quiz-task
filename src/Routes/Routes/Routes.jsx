import { createBrowserRouter } from "react-router-dom";
import TestLobby from "../../Components/TestLobby/TestLobby";
import Main from "../../Layouts/Main/Main";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/start-test',
                element:<TestLobby/>
            }
        ]
}
]);
export default router;