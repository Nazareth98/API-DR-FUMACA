import React from "react";
import "./styles.scss";
import Button from "../button";

const CustomTable = ({
  data,
  headers,
  canEdit,
  canRemove,
  handleRemove,
  handleEdit,
}) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((item) => (
            <th>{item}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {item.columns.map((column) => (
              <td>{column}</td>
            ))}
            <td className="td-buttons">
              {canEdit ? (
                <Button
                  text="editar"
                  buttonType="main-button"
                  id={item.id}
                  onClick={handleEdit}
                />
              ) : null}
              {canRemove ? (
                <Button text="remover" onClick={handleRemove} id={item.id} />
              ) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
