import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";

const TableRow = ({ id, tDatas, remove, match }) => (
  <tr>
    {tDatas.map((tdataText, ind) => (
      <td key={ind}>{tdataText}</td>
    ))}
    <td>
      <button className="admin-btn">
        <Link to={`${match.url}`} onClick={() => alert(`Details ${id}`)}>
          Details
        </Link>
      </button>
      <button onClick={() => remove(id)} className="admin-btn">
        Remove
      </button>
    </td>
  </tr>
);
const Table = ({ items, tHeads, remove, match }) => {
  return (
    <article className="content">
      <section>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                {tHeads.map((theadText, ind) => (
                  <th key={ind}>{theadText}</th>
                ))}
                <th />
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0" border="0">
            <tbody>
              {items &&
                items.map(item => {
                  const tDatas = [];
                  tHeads.forEach(th => tDatas.push(item[th]));
                  return (
                    <TableRow
                      key={item.id}
                      id={item.id}
                      tDatas={tDatas}
                      remove={remove}
                      match={match}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  );
};

export default Table;
