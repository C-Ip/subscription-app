const NavBar = React.createClass({displayName: "NavBar",
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("nav", {className: "navbar navbar-expand-lg navbar-dark bg-primary"}, 
          React.createElement("a", {className: "navbar-brand", href: "#"}, "Navbar"), 
          React.createElement("div", {className: "collapse navbar-collapse", id: "navbarColor01"}, 
            React.createElement("ul", {className: "navbar-nav mr-auto"}, 
              React.createElement("li", {className: "nav-item"}, 
                React.createElement("a", {className: "nav-link", href: "/"}, "Home")
              ), 
              React.createElement("li", {className: "nav-item"}, 
                React.createElement("a", {className: "nav-link", href: "/about"}, "About")
              ), 
              React.createElement("li", {className: "nav-item"}, 
                React.createElement("a", {className: "nav-link", href: "#"}, "Account")
              )
            )
          )
        )
      )
    )
  }
});

const domContainer = document.getElementById('nav')
React.render(React.createElement(NavBar, null), domContainer);
