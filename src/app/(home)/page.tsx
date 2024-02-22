'use client';

import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';
import { COLS, ROWS } from '../../mocks';

export default async function Dashboard() {
  return (
    <main>
      <div className="mt-12">
        <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
          <Card className="py-4 bg-main">
            <CardBody className="overflow-visible py-2 text-white">
              <span className="flex font-bold ml-2">
                체중. &nbsp;&nbsp;80 KG
              </span>
            </CardBody>
          </Card>
          <Card className="py-4 bg-main">
            <CardBody className="overflow-visible py-2 text-white">
              <span className="flex font-bold ml-2">
                체지방률. &nbsp;&nbsp;20 %
              </span>
            </CardBody>
          </Card>
          <Card className="py-4 bg-main">
            <CardBody className="overflow-visible py-2 text-white">
              <span className="flex font-bold ml-2">
                골격근량. &nbsp;&nbsp;40 KG
              </span>
            </CardBody>
          </Card>
          <Card className="py-4 bg-main">
            <CardBody className="overflow-visible py-2 text-white">
              <span className="flex font-bold ml-2">
                기초대사량. &nbsp;&nbsp;1900 Kcal
              </span>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <span className="flex font-bold ml-2 opacity-65">측정표 기록</span>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="mt-5">
              <Table removeWrapper aria-label="table with dynamic content">
                <TableHeader columns={COLS}>
                  {(column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                  )}
                </TableHeader>
                <TableBody items={ROWS}>
                  {(item) => (
                    <TableRow key={item.key}>
                      {(columnKey) => (
                        <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                      )}
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <span className="flex font-bold ml-2 opacity-65">
              체성분 변화 기록
            </span>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="mt-5"></div>
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <span className="flex font-bold ml-2 opacity-65">종합 평가</span>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="mt-5"></div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}