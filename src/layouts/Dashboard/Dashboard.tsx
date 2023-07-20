import { Outlet, NavLink } from "react-router-dom"
import routes from "../../routes"

const Dashboard = () => {
    // const mainRoute = routes[0]
    // const subRoutes = mainRoute.children
    const [{ children: subRoutes }] = routes
    // console.log(subRoutes)
    return (
        <>
            <div className="topbar">
                <h1>Proyecto final</h1>
            </div>
            <div className="container">
                <div className="sidebar">
                    <ul className="links">
                        {subRoutes?.map((route) => (
                            <NavLink to={`/${route.path}`} key={route.id}>
                                <li>{route.id}</li>
                            </NavLink>
                        ))}
                    </ul>
                </div>
                <div className="main-section">
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
