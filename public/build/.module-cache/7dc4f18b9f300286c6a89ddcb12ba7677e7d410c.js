var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Hello ", this.props.name, "!"), 
        React.createElement("p", null, " Hi "), 
        React.createElement("button", null, " Like "), 
        React.createElement("li", null, 
          "Link"
        )
      )
    );
  }
});

const domContainer = document.getElementById('layout')
React.render(React.createElement(HelloWorld, {name: "Sandy"}), domContainer);
