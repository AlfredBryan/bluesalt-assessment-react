/* eslint-disable react-hooks/exhaustive-deps */
import { Box } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { useTable } from "react-table";

function CustomTable(props) {
  const data = useMemo(() => props.data || []);

  const columns = useMemo(() => props.columns || []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, i) => (
                <th key={i} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, i) => {
                  return (
                    <td key={i} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

const TableWrapper = styled(Box)`
  width: 100%;
  max-width: 100%;
  overflow-x: scroll;

  table {
    background: #ffffff;
    overflow-x: scroll;
    border: none;
    width: 100%;
    max-width: 100%;
  }

  th {
    color: #394141;
    text-align: left;
    white-space: nowrap;
    padding: 10px;
    color: #8392ab;
    font-size: 14px;
    font-weight: 700;
  }

  tr {
    border-bottom: 1px solid #f5f5f5;
    height: 64px;
    text-align: center;

    &:hover {
      .options {
        opacity: 1;
      }
    }
  }

  td {
    text-align: left;
    color: #8392ab;
    white-space: nowrap;
    text-transform: capitalize;
  }

  thead {
    border-bottom: 1px solid #f5f5f5;
    background-color: #fff;
  }

  tbody {
    tr {
      &:hover {
        background: rgba(53, 88, 199, 0.1);
      }
    }
  }
  @media (max-width: 768px) {
    tr {
      display: flex !important;
      flex-direction: column !important;
      row-gap: 260px !important ;
    }
  }
`;

export { CustomTable, TableWrapper };
