import React from 'react';

export default ({ children }) => {
  return (
    <div className="container">
      <nav>
        <div className="nav-wrapper teal">
          <a className="brand-logo center">Lyrical GraphQL</a>
        </div>
      </nav>
      {children}
    </div>
  );
};
