import * as React from "react";

import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "User" },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "phone_number", headerName: "Phone", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "is_full_access",
    headerName: "FullUser",
    renderCell: (params) => <TableCheckbox isChecked={params.value} />,
    disableClickEventBubbling: true,
    width: 130,
  },
  {
    field: "isAdmin",
    headerName: "Admin",
    renderCell: (params) => <TableCheckbox isChecked={params.value} />,
    disableClickEventBubbling: true,
  },

  {
    field: "update",
    headerName: "Update",
    width: 100,
    renderCell: (params) => <UpdateButton />,
    disableClickEventBubbling: true,
  },
];

const UpdateButton = () => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="primary"
      size="small"
      className={classes.button}
      // startIcon={<SaveIcon />}
    >
      Update
    </Button>
  );
};

const TableCheckbox = ({ isChecked }) => {
  const [checked, setChecked] = React.useState(isChecked);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        onClick={handleChange}
        checked={checked}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
};

const UsersTable = ({ users }) => {
  console.log("users", users);
  const rows = users.userList
    ? users.userList.map((e, i) => ({ ...e, id: i, UpdateButton }))
    : [];
  console.log("r", rows);
  return (
    <div style={{ height: 400, width: "100%" }}>
      {users.userList && (
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

export default UsersTable;
