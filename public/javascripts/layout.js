const HomePage = React.createClass({
  render: function() {
    return(
      <div>
        <h1>Hello</h1>
      </div>
    )
  }
});

const domContainer = document.getElementById('layout')
React.render(<HomePage />, domContainer);
