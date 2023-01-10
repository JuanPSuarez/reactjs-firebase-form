import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
    <>
        <nav>
        <ul>
            <li>
            <Link to="/">Formulario</Link>
            </li>
            <li>
            <Link to="/AnswersPage">Respuestas</Link>
            </li>
            {/* <li>
            <Link to="/contact">Contact</Link>
            </li> */}
        </ul>
        </nav>
        <Outlet />
    </>
    )
    };

export default Layout;