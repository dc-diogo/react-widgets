import React from 'react';

const Accordion = ({ items }) => {
  const renderedItems = items.map((item) => {
    return (
      <div key={item.title}>
        <div className="title active">
          <i classNae="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="ui style accordion">{renderedItems}</div>;
};

export default Accordion;
