import { Link } from 'react-router-dom';
import "./footer.css"

function Nav() {
    const handleLogout = () => {
        localStorage.setItem("islogged", 'false');
        window.location.reload();
        localStorage.removeItem('id');
        localStorage.removeItem('email');
        window.location.href="/";
    }

    return (
        <div className="container-fluid">
            <nav className="navbar">
                <div className="navbar-brand"><Link to="/home" className="nav-link fs-2 m-2 yellow">eDriveSpace</Link></div>
                <div className="nav">
                    <Link to="/home" className="nav-link m-2 yellow fs-5">Home</Link>
                    <Link to="/shop" className="nav-link m-2 yellow fs-5">Shop</Link>
                    <Link to="/services" className="nav-link m-2 yellow fs-5">Services</Link>
                    <Link to="/contactus" className="nav-link m-2 yellow fs-5">Contact Us</Link>
                    <Link to="/faq" className="nav-link m-2 yellow fs-5">FAQ</Link>
                    {localStorage.getItem('islogged') === 'true' ? (
                        <button className="btn btn-danger my-3 mx-2" style={{height:"5%"}} onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to="/login" className="nav-link m-2 yellow fs-5">Login</Link>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Nav;