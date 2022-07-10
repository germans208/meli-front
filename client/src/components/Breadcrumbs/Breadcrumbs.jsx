import React from "react";

import "./_breadcrumbs.scss";

const Breadcrumbs = ({categories}) => {
  let breadcrumb = [];

  if (categories.length !== 0) {
    breadcrumb = Object.values(categories).map((element, index) => {
      return (
        <span key={element} className="breadcrumb-item">
          {element}
        </span>
      );
    });
  }

  return (
    <div className="breadcrumb-container">
      <span className="breadcrumb-text">{breadcrumb}</span>
    </div>
  );
};

export default Breadcrumbs;
