var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
      </div>
    );
  }
});

const domContainer = document.getElementById('layout')
React.render(<HelloWorld name="Sandy"/>, domContainer);
