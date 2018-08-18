const HomePage = React.createClass({displayName: "HomePage",
  render: function() {
    return(
      React.createElement("div", null, 
        React.createElement("h1", null, "Hello")
      )
    )
  }
});

const domContainer = document.getElementById('layout')
React.render(React.createElement(HomePage, null), domContainer);
