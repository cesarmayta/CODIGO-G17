import "./prueba.css";
import { columns as cols } from "./columns";
import { useState } from "react";

const KillaDataTable = ({ rows = 10, columns = [] }) => {
  const [pagination, setPagination] = useState(1);

  const updatePagination = (action) => {
    if (action === "next") {
      return setPagination(pagination + 1);
    }
    return setPagination(pagination - 1);
  };

  const renderRows = () => {
    const data = columns;
    const startIndex = rows * pagination - rows;
    const endIndex = rows * pagination;
    const updatedData = data.slice(startIndex, endIndex);
    return updatedData.map((column, index) => (
      <tr
        className={`killa_table_body_row ${index % 2 === 1 ? "stripe" : ""}`}
        key={index}
      >
        <th>
          <input type="checkbox" />
        </th>
        <td>{column.id}</td>
        <td>Ann Culhane</td>
        <td>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          reprehenderit, at ad perspiciatis laborum temporibus ea sit quam
          aliquam libero?
        </td>
        <td>
          <span>Open</span>
        </td>
        <td>$70.00</td>
        <td>-$270.00</td>
        <td>$500.00</td>
      </tr>
    ));
  };

  return (
    <div className="prueba_prueba">
      <div className="killa_datatable">
        <div className="killa_datatable_header">
          <button className="killa_filter_icon">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.79 1.61564C12.3029 0.959102 11.8351 0 11.002 0H1.00186C0.168707 0 -0.299092 0.959101 0.213831 1.61564L5.03983 7.72867C5.1772 7.90449 5.25181 8.1212 5.25181 8.34432V13.7961C5.25181 13.9743 5.46724 14.0635 5.59323 13.9375L6.60536 12.9254C6.69913 12.8316 6.75181 12.7044 6.75181 12.5718V8.34432C6.75181 8.1212 6.82643 7.90449 6.96379 7.72867L11.79 1.61564Z"
                fill="#464F60"
              />
            </svg>
          </button>
          <div className="killa_search_input">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.6821 11.7458C9.66576 12.5361 8.38866 13.0067 7.00167 13.0067C3.68704 13.0067 1 10.3189 1 7.00335C1 3.68779 3.68704 1 7.00167 1C10.3163 1 13.0033 3.68779 13.0033 7.00335C13.0033 8.39059 12.533 9.66794 11.743 10.6845L14.7799 13.7186C15.0731 14.0115 15.0734 14.4867 14.7806 14.7799C14.4878 15.0731 14.0128 15.0734 13.7196 14.7805L10.6821 11.7458ZM11.5029 7.00335C11.5029 9.49002 9.48765 11.5059 7.00167 11.5059C4.5157 11.5059 2.50042 9.49002 2.50042 7.00335C2.50042 4.51668 4.5157 2.50084 7.00167 2.50084C9.48765 2.50084 11.5029 4.51668 11.5029 7.00335Z"
                fill="#868FA0"
              />
            </svg>
            <input type="text" placeholder="Search..." />
          </div>
          <button className="killa_add_button">Add customer</button>
        </div>
        <table className="killa_datatable_table">
          <thead>
            <tr className="killa_table_head_row">
              <th>
                <input type="checkbox" />
              </th>
              <th>#</th>
              <th>
                Name
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.40962 13.4148C8.21057 13.6992 7.78943 13.6992 7.59038 13.4148L5.05071 9.78673C4.81874 9.45534 5.05582 9 5.46033 9H10.5397C10.9442 9 11.1813 9.45534 10.9493 9.78673L8.40962 13.4148Z"
                    fill="#BCC2CE"
                  />
                  <path
                    d="M8.40962 2.58517C8.21057 2.30081 7.78943 2.30081 7.59038 2.58517L5.05071 6.21327C4.81874 6.54466 5.05582 7 5.46033 7H10.5397C10.9442 7 11.1813 6.54466 10.9493 6.21327L8.40962 2.58517Z"
                    fill="#BCC2CE"
                  />
                </svg>
              </th>
              <th>Description</th>
              <th>Status</th>
              <th>Rate</th>
              <th>Balance</th>
              <th>Deposit</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </table>
        {/* <div className="killa_datatable_blur"></div> */}
        <div className="killa_datatable_footer">
          <div className="killa_datatable_count">1-10 of {columns.length}</div>
          <div className="killa_datatable_navigation">
            <button
              className="killa_button br-6 next_previous_button"
              onClick={() => updatePagination("previous")}
              disabled={pagination === 1 ? true : false}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 11L6.5 8L9.5 5"
                  stroke="#464F60"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span>1/10</span>
            <button
              className="killa_button br-6 next_previous_button"
              onClick={() => updatePagination("next")}
              disabled={
                parseInt(columns.length / rows + 1) === pagination
                  ? true
                  : false
              }
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 11L9.5 8L6.5 5"
                  stroke="#464F60"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Try = () => {
  return <KillaDataTable rows={10} columns={cols} />;
};
