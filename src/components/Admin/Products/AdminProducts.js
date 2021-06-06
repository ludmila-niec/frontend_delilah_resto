import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Paper,
  Button,
  Typography,
} from "@material-ui/core";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    fontWeight: theme.fontWeightMedium,
  },
  root: {
    padding: "1.5rem",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const AdminProducts = ({ products }) => {
  function renderProduct(product) {
    const { img, name, description, price, product_id } = product;
    return (
      <StyledTableRow key={product_id}>
        <StyledTableCell>
          <img src={img} alt={name} height="75" width="75" />
        </StyledTableCell>
        <StyledTableCell>{name}</StyledTableCell>
        <StyledTableCell>
          <Typography color="textSecondary">{description}</Typography>
        </StyledTableCell>
        <StyledTableCell>${price}</StyledTableCell>
        <StyledTableCell>
          <Button variant="contained" color="primary">
            Editar
          </Button>
        </StyledTableCell>
      </StyledTableRow>
    );
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="Products list">
          <TableHead>
            <TableRow>
              <StyledTableCell>Foto</StyledTableCell>
              <StyledTableCell>Titulo</StyledTableCell>
              <StyledTableCell>Descripción</StyledTableCell>
              <StyledTableCell>Precio</StyledTableCell>
              <StyledTableCell>Acción</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{products.map(renderProduct)}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default AdminProducts;
