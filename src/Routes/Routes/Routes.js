import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddToCart from "../../Pages/AddToCart/AddToCart";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import Baverages from "../../Pages/Home/AllCategory1/Baverages";
import BiscuitsAndSnakes from "../../Pages/Home/AllCategory1/BiscuitsAndSnakes";
import BreadsAndBakery from "../../Pages/Home/AllCategory1/BreadsAndBakery";
import BreakfastAndDairy from "../../Pages/Home/AllCategory1/BreakfastAndDairy";
import FrozenFoods from "../../Pages/Home/AllCategory1/FrozenFoods";
import FruitsAndVagetables from "../../Pages/Home/AllCategory1/FruitsAndVagetables";
import GroceryAndStaples from "../../Pages/Home/AllCategory1/GroceryAndStaples";
import MeatsAndSeafoods from "../../Pages/Home/AllCategory1/MeatsAndSeafoods";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/baverages',
                element:<Baverages></Baverages>
            },
            {
                path:'/biscuitssnakes',
                element:<BiscuitsAndSnakes></BiscuitsAndSnakes>
            },
            {
                path:'/breadsbakery',
                element:<BreadsAndBakery></BreadsAndBakery>
            },
            {
                path:'/breakfastdairy',
                element:<BreakfastAndDairy></BreakfastAndDairy>
            },
            {
                path:'/foodsfrozen',
                element:<FrozenFoods></FrozenFoods>
            },
            {
                path:'/fruitsvegetables',
                element:<FruitsAndVagetables></FruitsAndVagetables>
            },
            {
                path:'/grocerystaples',
                element:<GroceryAndStaples></GroceryAndStaples>
            },
            {
                path:'/meatsseafood',
                element:<MeatsAndSeafoods></MeatsAndSeafoods>
            },
            {
                path:'/addtocart/:id',
                element:<AddToCart></AddToCart>,
                loader: ({params}) => fetch(`https://e-commerce-server-site.vercel.app/addtocart/${params.id}`)
            },
            {
                path:'/checkout/:id',
                element:<CheckOut></CheckOut>,
                loader: ({params}) => fetch(`https://e-commerce-server-site.vercel.app/addtocart/${params.id}`)
            }
            
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<MyOrders></MyOrders>
            }
        ]
    }
 ])

 export default router;