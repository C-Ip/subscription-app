const HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return(
      React.createElement("div", null
      )
    )
  }
});

const domContainer = document.getElementById('nav')
React.render(React.createElement(HelloWorld, {name: "Sandy"}), domContainer);
