import { useEffect, useState } from 'react'
import {useRoutes, BrowserRouter } from 'react-router-dom'
// import { ParallaxProvider } from "react-scroll-parallax";
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/footer'
import Loader from '../../Components/Loader'


import Home from '../Home'
import Services from '../Services'
import Solutions from '../Solutions'
import GetKnow  from '../GetKnow'

const AppRoutes = () =>{
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/services', element: <Services />},
        { path: '/solutions', element: <Solutions />},
        { path: '/GetKnow', element: <GetKnow />}
    ])
    return routes
}

const App = () =>{
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const initApp = async () =>{
            await new Promise((res) => setTimeout(res,4000));
            setLoading(false);
        };
        initApp();
    },[]);

    if(loading) return <Loader />;

    return(
        <BrowserRouter>
            {/* <ParallaxProvider> */}
                <Navbar />
                <AppRoutes />
                <Footer />
            {/* </ParallaxProvider> */}
        </BrowserRouter>
    );
}

export default App