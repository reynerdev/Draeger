import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Paper } from '@material-ui/core';
// import ReactDataGrid from '@inovua/reactdatagrid-community';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];
const rows = [
  { id: 1, lastName: 'Snownasskdjashndsndshnd', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
// const columns = [
//   { name: 'name', header: 'Name', minWidth: 50, defaultFlex: 2 },
//   { name: 'age', header: 'Age', maxWidth: 1000, defaultFlex: 1 },
// ];

// const gridStyle = { minHeight: 550 };

// const dataSource = [
//   { id: 1, name: 'John McQueen', age: 35 },
//   { id: 2, name: 'Mary Stones', age: 25 },
//   { id: 3, name: 'Robert Fil', age: 27 },
//   { id: 4, name: 'Roger Robson', age: 81 },
//   { id: 5, name: 'Billary Konwik', age: 18 },
//   { id: 6, name: 'Bob Martin', age: 18 },
//   { id: 7, name: 'Matthew Richardson', age: 54 },
//   { id: 8, name: 'Ritchie Peterson', age: 54 },
//   { id: 9, name: 'Bryan Martin', age: 40 },
//   { id: 10, name: 'Mark Martin', age: 44 },
//   { id: 11, name: 'Michelle Sebastian', age: 24 },
//   { id: 12, name: 'Michelle Sullivan', age: 61 },
//   { id: 13, name: 'Jordan Bike', age: 16 },
//   { id: 14, name: 'Nelson Ford', age: 34 },
//   { id: 15, name: 'Tim Cheap', age: 3 },
//   { id: 16, name: 'Robert Carlson', age: 31 },
//   { id: 17, name: 'Johny Perterson', age: 40 },
// ];
const TableContainer = () => {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
  // return (
  //   <ReactDataGrid
  //     idProperty="id"
  //     columns={columns}
  //     dataSource={dataSource}
  //     gridStyle={gridStyle}
  //   />
  // );
  {
    /* <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection /> */
  }
  {
    /* <Button variant="contained">hddh hk</Button> */
  }
  {
    /* </ReactDataGrid>
  ); */
  }
};

export default TableContainer;
