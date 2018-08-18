const navComponent = React.createClass({displayName: "navComponent",
  render: function() {
    return(
      React.createElement("nav", null, 
  React.createElement("div", {className: "navWide"}, 
      React.createElement("div", {className: "wideDiv"}, 
          React.createElement("a", {href: "#"}, "Link 1"), 
          React.createElement("a", {href: "#"}, "Link 2"), 
          React.createElement("a", {href: "#"}, "Link 3")
        )
    ), 
    React.createElement("div", {className: "navNarrow"}, 
      React.createElement("i", {className: "fa fa-bars fa-2x"}), 
        React.createElement("div", {className: "narrowLinks"}, 
            React.createElement("a", {href: "#"}, "Link 1"), 
            React.createElement("a", {href: "#"}, "Link 2"), 
            React.createElement("a", {href: "#"}, "Link 3")
        )
  )
)
    )
  }
});

React.render(React.createElement("navComponent", null), document.querySelector('navbar'));
