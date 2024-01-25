import React from 'react';

const Appbar = React.memo(() => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">HW-59</span>
      </div>
    </nav>
  );
});

export default Appbar;