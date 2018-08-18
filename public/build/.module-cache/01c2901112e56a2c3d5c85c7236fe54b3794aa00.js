var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return (
      React.createElement(Navbar, null, 
        React.createElement(Navbar.Header, null, 
          React.createElement(Navbar.Brand, null, 
            React.createElement("a", {href: "#home"}, "React-Bootstrap")
          )
        ), 
        React.createElement(Nav, null, 
          React.createElement(NavItem, {eventKey: 1, href: "#"}, 
            "Link"
          ), 
          React.createElement(NavItem, {eventKey: 2, href: "#"}, 
            "Link"
          ), 
          React.createElement(NavDropdown, {eventKey: 3, title: "Dropdown", id: "basic-nav-dropdown"}, 
            React.createElement(MenuItem, {eventKey: 3.1}, "Action"), 
            React.createElement(MenuItem, {eventKey: 3.2}, "Another action"), 
            React.createElement(MenuItem, {eventKey: 3.3}, "Something else here"), 
            React.createElement(MenuItem, {divider: true}), 
            React.createElement(MenuItem, {eventKey: 3.4}, "Separated link")
          )
        )
      )
    );
  }
});

const domContainer = document.getElementsByTagName('body')
React.render(React.createElement(HelloWorld, {name: "Sandy"}), domContainer);
