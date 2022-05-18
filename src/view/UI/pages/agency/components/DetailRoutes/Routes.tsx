import { FC } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import css from "./styles.module.scss";
import { IAgencyRoutes } from "./types";

export const Routes: FC<IAgencyRoutes> = ({
  handleEditRouteClick,
  agencyOrders,
  handleDeleteRouteClick,
}) => {
  //TODO: any
  const handleClickRow = (event: any) => {
    const $editButton = event.target.closest("[data-edit-id]");
    const $deleteButton = event.target.closest("[data-delete-id]");

    $editButton && handleEditRouteClick($editButton.dataset.editId);
    $deleteButton && handleDeleteRouteClick($deleteButton.dataset.deleteId);
  };
  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ОТКУДА</TableCell>
            <TableCell>КУДА</TableCell>
            <TableCell>ЦЕНА</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody onClick={handleClickRow}>
          {agencyOrders.map((row) => (
            <TableRow key={row.id} className={css.tableRow}>
              <TableCell>{row.route.origin.name}</TableCell>
              <TableCell>{row.route.destination.name}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>
                <div className={css.icons}>
                  <IconButton aria-label="edit route" data-edit-id={row.id}>
                    <EditRoundedIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    aria-label="delete route"
                    data-delete-id={row.id}
                    color="error"
                  >
                    <DeleteForeverIcon fontSize="small" />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
