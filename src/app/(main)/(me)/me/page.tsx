'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { useState, useEffect } from 'react';
import { useAuth } from '@hooks/useAuth.ts';

export default function Profile() {
  const [userData, setUserData] = useState(null);
  const { getCookie } = useAuth();

  useEffect(() => {
    const getMe = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/users/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${getCookie('accessToken')}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setUserData(result.data);
        } else {
          console.error('GET ME ERROR');
        }
      } catch (error) {
        console.error('GET ME ERROR:', error);
      }
    };

    getMe();
  }, []);

  return (
    <div className="py-8 px-4">
      <div className="flex items-center space-x-3">
        <div className="w-16 h-16 bg-slate-500 rounded-full" />
        <div className="flex flex-col">
          <span className="font-medium">{userData?.username}</span>
          <span className="text-sm text-gray-400">프로필 수정하기</span>
        </div>
      </div>
      <Card className="mt-5">
        <CardBody>
          <div className="mt-5 mb-5 flex justify-around">
            <div className="flex flex-col items-center">
              <div className="text-main font-bold flex items-center justify-center">
                <span>1000</span>
              </div>
              <span className="text-sm font-medium mt-2">내 점수</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-main font-bold flex items-center justify-center">
                <span>3</span>
              </div>
              <span className="text-sm font-medium mt-2">내 순위</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-main font-bold flex items-center justify-center">
                <span>10</span>
              </div>
              <span className="text-sm font-medium mt-2">친구 수</span>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="mt-2">
        <div className="flex space-x-4 items-center">
          <Card className="mt-5 w-full">
            <CardBody>
              <div className="mt-5 mb-5 flex justify-center">
                <h1>현재 참여중인 도전이 없습니다.</h1>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex space-x-4 items-center">
          <Card className="mt-5 w-full">
            <CardHeader className="mt-2 px-4 flex justify-between items-center">
              내 친구 목록
            </CardHeader>
            <CardBody className="pb-6">
              <div className="h-[320px] mb-4">
                <div>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => (
                    <div
                      key={id}
                      className="flex px-4 cursor-pointer py-3 items-center space-x-3 hover:bg-gray-700 rounded-lg"
                    >
                      <div className="w-12 h-12 rounded-full bg-slate-500" />
                      <div className="flex-grow">
                        <div>
                          <p>김재용</p>
                          <p className="text-sm opacity-70">
                            jaeyong@gmail.com
                          </p>
                        </div>
                      </div>
                      <div>
                        <button className="primary-btn w-14">삭제</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
