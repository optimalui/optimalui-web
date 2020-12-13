import React, { cloneElement } from "react";

export const TableRowItem = ({ children }) => <td>{children}</td>;

export const DocTableRow = ({ children, ...props }) => (
  <tr {...props}>
    {React.Children.map(children, (child, index) => {
      if (child.type === TableRowItem) {
        return cloneElement(child, {
          key: index,
          ...child.props,
        });
      }
      return null;
    })}
  </tr>
);

export const DocTable = ({ heads = [], children, ...props }) => (
  <table className="uk-table uk-table-divider" {...props}>
    <thead>
      <tr>
        {heads.map((value, index) => (
          <th align="left" key={index}>
            {value}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {React.Children.map(children, (child, index) => {
        if (child.type === DocTableRow) {
          return cloneElement(child, {
            key: index,
            ...child.props,
          });
        }
        return null;
      })}
    </tbody>
  </table>
);
