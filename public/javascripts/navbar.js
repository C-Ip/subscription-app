const NavBar = React.createClass({
  render: function() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Navbar</a>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Account</a>
              </li>
            </ul>
          </div>
        </nav>

        <div>
          <h1> Hello World </h1>
        </div>
      </div>
    )
  }
});

const domContainer = document.getElementById('nav')
React.render(<NavBar />, domContainer);
