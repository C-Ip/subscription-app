function handleSelect(selectedKey) {
  alert(`selected ${selectedKey}`);
}

const navInstance = (
  React.createElement(Nav, {bsStyle: "pills", activeKey: 1, onSelect: handleSelect}, 
    React.createElement(NavItem, {eventKey: 1, href: "/home"}, 
      "NavItem 1 content"
    ), 
    React.createElement(NavItem, {eventKey: 2, title: "Item"}, 
      "NavItem 2 content"
    ), 
    React.createElement(NavItem, {eventKey: 3, disabled: true}, 
      "NavItem 3 content"
    )
  )
);

render(navInstance);
