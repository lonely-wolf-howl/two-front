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
import { COLS, ROWS } from '../mocks';

const TableComp = () => {
  return (
    <Table removeWrapper aria-label="table with dynamic content">
      <TableHeader columns={COLS}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={ROWS}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell className="font-bold opacity-60">
                {getKeyValue(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
export default TableComp;
