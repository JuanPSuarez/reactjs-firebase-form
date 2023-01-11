import { Outlet, Link,  } from "react-router-dom";
import { Button } from "@mui/material"
import { useLocation } from 'react-router'

const Layout = () => {
    const location = useLocation()
    return (
    <>
    {location.pathname === "/AnswersPage" && 
        <Link to="/">
    <Button variant="contained">Volver</Button>
    </Link>}
        <Outlet />
    </>
    )
    };

export default Layout;