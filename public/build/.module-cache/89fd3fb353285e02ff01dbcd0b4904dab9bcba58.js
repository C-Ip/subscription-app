const HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("nav", {className: "navbar navbar-expand-lg navbar-dark bg-primary"}, 
          React.createElement("a", {className: "navbar-brand", href: "#"}, "Navbar"), 
          React.createElement("div", {className: "collapse navbar-collapse", id: "navbarColor01"}, 
            React.createElement("ul", {className: "navbar-nav mr-auto"}, 
              React.createElement("li", {className: "nav-item active"}, 
                React.createElement("a", {className: "nav-link", href: "#"}, "Home ", React.createElement("span", {className: "sr-only"}, "(current)"))
              ), 
              React.createElement("li", {className: "nav-item"}, 
                React.createElement("a", {className: "nav-link", href: "#"}, "Features")
              ), 
              React.createElement("li", {className: "nav-item"}, 
                React.createElement("a", {className: "nav-link", href: "#"}, "Pricing")
              ), 
              React.createElement("li", {className: "nav-item"}, 
                React.createElement("a", {className: "nav-link", href: "#"}, "About")
              )
            )
          )
        )
      )
    )
  }
});

const domContainer = document.getElementById('nav')
React.render(React.createElement(HelloWorld, {name: "Sandy"}), domContainer);
