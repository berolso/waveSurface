import React, { useState } from "react";
import WaveServer from "../api/waveServer";

import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const UsersTable = ({ users, setInfoLoaded, infoLoaded }) => {
  const [tableState, setTableState] = useState(users.userList);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "username", headerName: "User" },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    { field: "phoneNumber", headerName: "Phone", width: 130 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isFullAccess",
      headerName: "FullUser",
      width: 130,
      renderCell: (params) => (
        <TableCheckbox
          isChecked={params.value}
          tableState={tableState}
          setTableState={setTableState}
          params={params}
        />
      ),
      disableClickEventBubbling: true,
    },
    {
      field: "isAdmin",
      headerName: "Admin",
      renderCell: (params) => (
        <TableCheckbox
          isChecked={params.value}
          tableState={tableState}
          setTableState={setTableState}
          params={params}
        />
      ),
      disableClickEventBubbling: true,
    },
    {
      field: "update",
      headerName: "Update",
      width: 100,
      renderCell: (params) => (
        <UpdateButton
          username={params.row.username}
          rowData={params.row}
          setInfoLoaded={setInfoLoaded}
        />
      ),
      disableClickEventBubbling: true,
    },
    {
      field: "delete",
      headerName: "Delete User",
      width: 130,
      renderCell: (params) => (
        <DeleteButton
          username={params.row.username}
          setInfoLoaded={setInfoLoaded}
        />
      ),
      disableClickEventBubbling: true,
    },
  ];

  console.log("tab", tableState);
  const rows = tableState
    ? tableState.map((e, i) => ({
        ...e,
        id: i,
      }))
    : [];
  return (
    <div style={{ height: 400, width: "100%" }}>
      {tableState && (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={9}
          checkboxSelection={false}
        />
      )}
    </div>
  );
};

const UpdateButton = ({ username, rowData, setInfoLoaded }) => {
  const handleUpdate = async () => {
    try {
      console.log(rowData);
      delete rowData.id;
      let res = await WaveServer.updatePermission(username, rowData);
      console.log("refr", res);
      setInfoLoaded(false);
    } catch (err) {
      console.error("failed to update", err);
    }
  };
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      onClick={handleUpdate}
    >
      Update
    </Button>
  );
};

const DeleteButton = ({ username, setInfoLoaded }) => {
  const handleDelete = async () => {
    try {
      let res = await WaveServer.delete(username);
      console.log("res", res);
      setInfoLoaded(false);
    } catch (err) {
      console.error("failed to delete", err);
    }

    console.log(username);
  };
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="secondary"
      size="small"
      className={classes.button}
      onClick={handleDelete}
      // startIcon={<SaveIcon />}
    >
      Delete
    </Button>
  );
};

const TableCheckbox = ({ isChecked, params, tableState, setTableState }) => {
  const handleChange = (evt) => {
    // trigger table rerender with setTableState when check is toggled.
    // create copy, modify copy, replac with copy
    const stateCopy = [...tableState];

    stateCopy[params.rowIndex][params.field] = evt.target.checked;

    setTableState(stateCopy);
  };
  return (
    <div>
      <Checkbox
        onClick={handleChange}
        checked={isChecked}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
};

export default UsersTable;
