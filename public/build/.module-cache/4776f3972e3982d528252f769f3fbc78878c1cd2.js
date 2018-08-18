var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("nav", {class: "navbar navbar-expand-lg navbar-light bg-light"}, 
          React.createElement("a", {class: "navbar-brand", href: "/"}, "Navbar"), 
          React.createElement("div", {class: "collapse navbar-collapse", id: "navbarSupportedContent"}, 
            React.createElement("ul", {class: "navbar-nav mr-auto"}, 
              React.createElement("li", {class: "nav-item"}, 
                React.createElement("a", {class: "nav-link", href: "/"}, "Home")
              )
            )
          )
        ), 
        React.createElement("h1", null, "Hello ", this.props.name, "!")
      )
    );
  }
});

const domContainer = document.getElementById('layout')
React.render(React.createElement(HelloWorld, {name: "Sandy"}), domContainer);
