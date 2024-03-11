import { Card, CardHeader, CardBody } from '@nextui-org/react';
import MyChart from '@components/MyChart';
import CompareChart from '@components/CompareChart';
import MyButton from '@components/MyButton';
import CardTitle from '@components/CardTitle';

export default function Dashboard() {
  return (
    <div className="py-4 px-4">
      <Card className="mt-5 w-full max-w-xl">
        <CardBody>
          <div className="mt-5 mb-5 flex justify-around">
            <div className="flex flex-col items-center">
              <div className="text-main font-bold flex items-center justify-center">
                <span>80 KG</span>
              </div>
              <span className="text-sm font-medium mt-2">체중</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-main font-bold flex items-center justify-center">
                <span>20 %</span>
              </div>
              <span className="text-sm font-medium mt-2">체지방률</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-main font-bold flex items-center justify-center">
                <span>40 KG</span>
              </div>
              <span className="text-sm font-medium mt-2">골격근량</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-main font-bold flex items-center justify-center">
                <span>1900 Kcal</span>
              </div>
              <span className="text-sm font-medium mt-2">기초대사량</span>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="mt-2">
        <div className="flex items-center">
          <Card className="mt-5 w-full max-w-xl">
            <CardBody className="flex flex-row space-x-4">
              <button className="primary-btn flex flex-row justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                기록 검색
              </button>
              <button className="primary-btn flex flex-row justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                체성분 등록
              </button>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center">
          <Card className="mt-5 w-full max-w-xl">
            <CardHeader className="pt-4 px-4 flex justify-between items-center">
              <CardTitle text="체성분 변화" />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div>
                <MyChart />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex items-center">
          <Card className="mt-5 w-full max-w-xl">
            <CardHeader className="pt-4 px-4 flex-col items-start">
              <CardTitle text="비교 평가" />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div>
                <CompareChart />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
