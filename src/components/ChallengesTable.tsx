'use client';

import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
} from '@nextui-org/react';
import { PlusIcon } from './icons/PlusIcon';
import { VerticalDotsIcon } from './icons/VerticalDotsIcon';
import { ChevronDownIcon } from './icons/ChevronDownIcon';
import { columns, datas, statusOptions } from '../mockdatas-challenge';
import { capitalize } from '../utils/capitalize';

const statusColorMap: Record<string, ChipProps['color']> = {
  공개: 'success',
  비공개: 'warning',
  종료: 'danger',
};

type User = (typeof datas)[0];

export default function ChallengesTable() {
  const [statusFilter, setStatusFilter] = React.useState<Selection>('all');
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const filteredItems = React.useMemo(() => {
    let filteredDatas = [...datas];

    if (
      statusFilter !== 'all' &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredDatas = filteredDatas.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredDatas;
  }, [datas, statusFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case 'name':
        return (
          <User
            avatarProps={{ radius: 'full', size: 'sm', src: user.avatar }}
            classNames={{
              description: 'text-default-500',
            }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case 'status':
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[user.status]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );
      case 'actions':
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem>보기</DropdownItem>
                <DropdownItem>삭제</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4 mt-10">
        <div className="flex justify-between gap-3 items-end">
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                  className="bg-main text-white"
                >
                  공개 여부
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className="bg-main text-white"
              endContent={<PlusIcon />}
              size="sm"
            >
              도전 생성
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-500 font-bold text-small">
            전체 {datas.length}개의 도전
          </span>
        </div>
      </div>
    );
  }, [statusFilter, datas.length]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: 'bg-main text-white',
          }}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
      </div>
    );
  }, [items.length, page, pages]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ['max-h-[382px]', 'max-w-3xl'],
      th: ['bg-transparent', 'text-default-500', 'border-b', 'border-divider'],
      td: [
        'group-data-[first=true]:first:before:rounded-none',
        'group-data-[first=true]:last:before:rounded-none',
        'group-data-[middle=true]:before:rounded-none',
        'group-data-[last=true]:first:before:rounded-none',
        'group-data-[last=true]:last:before:rounded-none',
      ],
    }),
    []
  );

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={classNames}
      topContent={topContent}
      topContentPlacement="outside"
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            allowsSorting={column.sortable}
            className="text-default-500 font-bold"
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody
        emptyContent={'검색 조건에 해당하는 도전이 없습니다.'}
        items={items}
      >
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell className="text-default-500 font-bold">
                {renderCell(item, columnKey)}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
