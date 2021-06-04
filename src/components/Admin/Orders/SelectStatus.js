import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core";
import { FormControl, Select, MenuItem } from "@material-ui/core";

const FormControlStyled = withStyles((theme) => ({
  root: {
    minWidth: "170px",
    background: theme.palette.primary.main,
    padding: "0.2rem 0.8rem",
    borderRadius: "10px",
    "& > .MuiInput-underline::before": {
      borderBottom: "0px",
    },
    "& > .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "0px",
    },
    "& > .MuiInput-underline::after": {
      borderBottom: "0px",
    },
  },
}))(FormControl);

const SelectStyled = withStyles((theme) => ({
  root: {
    color: "white",
    fontWeight: theme.fontWeightMedium,
  },
  icon: {
    color: "white",
  },
}))(Select);

const STATUS = [
  { name: "NUEVO", id: 1 },
  { name: "CONFIRMADO", id: 2 },
  { name: "PREPARANDO", id: 3 },
  { name: "ENVIANDO", id: 4 },
  { name: "ENTREGADO", id: 5 },
  { name: "CANCELADO", id: 6 },
];
function changeColor(status) {
  switch (status) {
    case STATUS[0].name:
      return "#516DB4";
    case STATUS[1].name:
      return "#9F73B2";
    case STATUS[2].name:
      return "#F69DA1";
    case STATUS[3].name:
      return "#F8AC43";
    case STATUS[4].name:
      return "#159851";
    case STATUS[5].name:
      return "#E2607F";
    default:
      return "#516DB4";
  }
}
function getStatusId(status) {
  switch (status) {
    case STATUS[0].name:
      return 1;
    case STATUS[1].name:
      return 2;
    case STATUS[2].name:
      return 3;
    case STATUS[3].name:
      return 4;
    case STATUS[4].name:
      return 5;
    case STATUS[5].name:
      return 6;
    default:
      return 1;
  }
}

const SelectStatus = ({ orderId, orderStatus, onUpdateOrderStatus }) => {
  const { name: statusName } = orderStatus;
  const [status, setStatus] = useState(STATUS[0].name);
  const [statusColor, setStatusColor] = useState("#516DB4");

  //   update de status on load
  useEffect(() => {
    if (statusName !== status) {
      setStatus(statusName);
    }
  }, []);

  // update status color
  useEffect(() => {
    if (status !== STATUS[0].name) {
      const color = changeColor(status);
      setStatusColor(color);
    }
  }, [status]);

  function handleChange(e) {
    const { value } = e.target;
    const color = changeColor(value);
    setStatus(value);
    setStatusColor(color);
    const statusId = getStatusId(value)
    const status = { name: value, id: statusId };
    // api call to update status
    onUpdateOrderStatus(orderId, status);
  }
  return (
    <FormControlStyled
      style={{ background: statusColor }}
      aria-label="select order current status"
    >
      <SelectStyled value={status} onChange={handleChange}>
        {STATUS.map((statusOption) => {
          const { name, id } = statusOption;
          return (
            <MenuItem key={id} value={name} selected={statusName === name}>
              {name}
            </MenuItem>
          );
        })}
      </SelectStyled>
    </FormControlStyled>
  );
};

export default SelectStatus;
