import React from "react";
import SelectStatus from "./SelectStatus";
import { withStyles } from "@material-ui/core/styles";
import {useStyles} from '../styles/adminOrders'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Link,
} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    fontWeight: theme.fontWeightMedium,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

// helper function to get total amount
function getTotal(products) {
  const total = products.reduce(
    (acc, item) =>
      acc +
      item.ProductOrders.product_price * item.ProductOrders.product_quantity,
    0
  );
  return total;
}

const AdminOrders = ({ orders, onUpdateOrderStatus }) => {
  const classes = useStyles()
  function renderOrder(order) {
    const { order_id, OrderStatus, products, Payment, User, updatedAt } = order;
    const date = new Date(updatedAt);
    const orderDate = date.toLocaleDateString("en-GB", {
      timeZone: "UTC",
    });
    const amount = getTotal(products);
    return (
      <StyledTableRow key={order_id}>
        <StyledTableCell>
          <Link to={`/order/${order_id}`} component={RouterLink}>
            #{order_id}
          </Link>
        </StyledTableCell>
        <StyledTableCell>{orderDate}</StyledTableCell>
        <StyledTableCell>
          {`${User.firstName} ${User.lastName}`}
        </StyledTableCell>
        <StyledTableCell>${amount}</StyledTableCell>
        <StyledTableCell>{Payment.name}</StyledTableCell>
        <StyledTableCell>
          <SelectStatus
            orderId={order_id}
            orderStatus={OrderStatus}
            onUpdateOrderStatus={onUpdateOrderStatus}
          />
        </StyledTableCell>
      </StyledTableRow>
    );
  }
  return (
    <div className={classes.container}>
    <TableContainer component={Paper}>
      <Table aria-label="orders summary">
        <TableHead>
          <TableRow>
            <StyledTableCell>Orden</StyledTableCell>
            <StyledTableCell>Fecha</StyledTableCell>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Monto</StyledTableCell>
            <StyledTableCell>Método de pago</StyledTableCell>
            <StyledTableCell>Estado</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{orders.map(renderOrder)}</TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default AdminOrders;
