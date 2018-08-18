const navComponent = React.createClass({displayName: "navComponent",
  render: function() {
    return(
      React.createElement("nav", {class: "navbar navbar-expand-lg navbar-light bg-light"}, 
        React.createElement("a", {class: "navbar-brand", href: "#"}, "Navbar"), 

        React.createElement("div", {class: "collapse navbar-collapse", id: "navbarSupportedContent"}, 
          React.createElement("ul", {class: "navbar-nav mr-auto"}, 
            React.createElement("li", {class: "nav-item active"}, 
              React.createElement("a", {class: "nav-link", href: "#"}, "Home")
            ), 
            React.createElement("li", {class: "nav-item"}, 
              React.createElement("a", {class: "nav-link", href: "#"}, "Link")
            )
          )
        )
      )
    )
  }
});

React.render(React.createElement("navComponent", null), document.querySelector('navbar'));
