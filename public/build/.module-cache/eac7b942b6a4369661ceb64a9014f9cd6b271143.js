const HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return(
      React.createElement("nav", {class: "navbar navbar-expand-lg navbar-dark bg-primary"}, 
        React.createElement("a", {class: "navbar-brand", href: "#"}, "Navbar"), 
        React.createElement("div", {class: "collapse navbar-collapse", id: "navbarColor01"}, 
          React.createElement("ul", {class: "navbar-nav mr-auto"}, 
            React.createElement("li", {class: "nav-item active"}, 
              React.createElement("a", {class: "nav-link", href: "#"}, "Home ", React.createElement("span", {class: "sr-only"}, "(current)"))
            ), 
            React.createElement("li", {class: "nav-item"}, 
              React.createElement("a", {class: "nav-link", href: "#"}, "Features")
            ), 
            React.createElement("li", {class: "nav-item"}, 
              React.createElement("a", {class: "nav-link", href: "#"}, "Pricing")
            ), 
            React.createElement("li", {class: "nav-item"}, 
              React.createElement("a", {class: "nav-link", href: "#"}, "About")
            )
          )
        )
      )
    )
  }
});

const domContainer = document.getElementById('nav')
React.render(React.createElement(HelloWorld, {name: "Sandy"}), domContainer);
