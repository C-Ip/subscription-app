const HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return(
      React.createElement("nav", {class: "navbar navbar-expand-lg navbar-dark bg-primary"}, 
        React.createElement("a", {class: "navbar-brand", href: "#"}, "Navbar"), 
        React.createElement("button", {class: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarColor01", "aria-controls": "navbarColor01", "aria-expanded": "false", "aria-label": "Toggle navigation"}, 
          React.createElement("span", {class: "navbar-toggler-icon"})
        ), 

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
          ), 
          React.createElement("form", {class: "form-inline my-2 my-lg-0"}, 
            React.createElement("input", {class: "form-control mr-sm-2", placeholder: "Search", type: "text"}), 
            React.createElement("button", {class: "btn btn-secondary my-2 my-sm-0", type: "submit"}, "Search")
          )
        )
      )
    )
  }
});

const domContainer = document.getElementById('layout')
React.render(React.createElement(HelloWorld, {name: "Sandy"}), domContainer);
