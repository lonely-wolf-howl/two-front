import {
  Card,
  CardHeader,
  CardBody,
  Chip,
  Image,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';
import DashboardTable from '../../components/DashboardTable';
import MyChart from '../../components/MyChart';
import CompareChart from '../../components/CompareChart';
import { DateRangePicker } from '@tremor/react';
import CustomButton from '../../components/CustomButton';
import CardTitle from '../../components/CardTitle';

const Dashboard = () => {
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
          <CardHeader className="pb-0 pt-2 px-4 flex justify-between items-center">
            <CardTitle text="기록" />
            <DateRangePicker
              className="max-w-xs"
              enableSelect={false}
              placeholder=""
            />
            <CustomButton text="조회" />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="mt-4">
              <DashboardTable />
            </div>
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex justify-between items-center">
            <CardTitle text="체성분 변화" />
            <CustomButton text="체성분 등록" />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="mt-4">
              <MyChart />
            </div>
          </CardBody>
        </Card>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <CardTitle text="비교 평가" />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="mt-8">
              <CompareChart />
            </div>
          </CardBody>
        </Card>
      </div>
    </main>
  );
};
export default Dashboard;
