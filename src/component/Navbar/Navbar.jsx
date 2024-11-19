import { Link } from "react-router-dom"

export function Navbar() {
    return (
        <nav>
            <Link to="/">Accueil</Link> | <Link to="/users">Users</Link>
        </nav>
    )
}