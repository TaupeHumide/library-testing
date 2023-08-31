import "./NavBar.css";
function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-ul">
        <li className="homepage-li">
          <a href="#homepage" className="homepage-link">
            Homepage
          </a>
        </li>
        <li className="directory-li">
          <a href="#dir3ectory" className="directory-link">
            dir3ectory
          </a>
        </li>
        <li className="contact-li">
          <a href="#contact" className="contact-link">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
