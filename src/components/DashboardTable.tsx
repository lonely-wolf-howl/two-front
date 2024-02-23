'use client';

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';
import { COLS, ROWS } from '../mockdatas';

const DashboardTable = () => {
  return (
    <Table removeWrapper aria-label="table with dynamic content">
      <TableHeader columns={COLS}>
        {(column) => (
          <TableColumn key={column.key} className="text-default-500 font-bold">
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={ROWS}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell className="text-default-500 font-bold">
                {getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default DashboardTable;
