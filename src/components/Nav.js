import { Link } from 'react-router-dom';
function Nav() {
  const handleLogout = () => {
    localStorage.setItem('islogged', 'false');
    window.location.href="/";
  };

  const renderNavBar = () => {
    if (localStorage.getItem('islogged') === 'true') {
      return (
        <div className="nav">
          <Link to="/" className="nav-link m-2 fs-5 p-2" style={{ color: "#ffac3c" }}>
            Home
          </Link>
          <Link to="/create" className="nav-link m-2 fs-5 p-2" style={{ color: "#ffac3c" }}>
            Create Car
          </Link>
          <Link to="/maintain" className="nav-link m-2 fs-5 p-2" style={{ color: "#ffac3c" }}>
            Maintain
          </Link>
          <Link to="/repair" className="nav-link m-2 fs-5 p-2" style={{ color: "#ffac3c" }}>
            Repair
          </Link>
          <Link to="/upgrade" className="nav-link m-2 fs-5 p-2" style={{ color: "#ffac3c" }}>
            Upgrade
          </Link>
          <Link to="/orders" className="nav-link m-2 fs-5 p-2" style={{ color: "#ffac3c" }}>
            Orders
          </Link>
          <Link to="/list" className="nav-link m-2 fs-5 p-2" style={{ color: "#ffac3c" }}>
            List
          </Link>
          <button className="btn btn-danger my-3 mx-2" onClick={handleLogout}>
            Logout
          </button>
        </div>
        
      );
    } 
  };

  return (
    <div className="container-fluid" style={{ color: "#ffac3c" }}>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="nav-link fs-2 p-2 m-2" style={{ color: "#ffac3c" }}>
            eDriveSpace
          </Link>
        </div>
        {(localStorage.getItem('islogged') === 'true') ? renderNavBar() : <Link to="/signin" className="nav-link m-2 yellow fs-5">Login</Link>}
      </nav>
    </div>
  );
}

export default Nav;
