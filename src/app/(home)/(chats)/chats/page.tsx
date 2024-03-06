'use client';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  ScrollShadow,
  User,
} from '@nextui-org/react';
import CardTitle from '../../../../components/CardTitle';
import MyButton from '../../../../components/MyButton';
import { Icon } from '@iconify/react';

const Chats = () => {
  return (
    <main>
      <div className="mt-12">
        <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex justify-between items-center">
              <CardTitle text="대화 목록" />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <ScrollShadow className="h-[400px] mt-5">
                <User
                  name="김호용"
                  description="hoyong@gmail.com"
                  avatarProps={{
                    src: '/images/nestjs.png',
                  }}
                  className="hover:bg-zinc-100 text-main px-5 py-2"
                />
              </ScrollShadow>
            </CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex justify-between items-center">
              <CardTitle text="대화창" />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <div>
                <ScrollShadow className="h-[400px] mt-5">
                  <div className="flex flex-col items-start">
                    <div className="w-full flex justify-end">
                      <div className="shadow-md p-4 block rounded-lg bg-main text-white mb-2">
                        <span className="inline-block">안녕!</span>
                      </div>
                    </div>
                    <div className="w-full flex justify-end">
                      <div className="shadow-md p-4 block rounded-lg bg-main text-white mb-2">
                        <span className="inline-block">
                          나랑 같이 도전할래?
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-start">
                      <div className="shadow-md p-4 block rounded-lg bg-main text-white mb-2">
                        <span className="inline-block">그래 좋아</span>
                      </div>
                    </div>
                  </div>
                </ScrollShadow>
              </div>
              <div className="flex items-center mt-5">
                <Input type="text" className="mr-2" size="sm" radius="md" />
                <Button className="bg-main text-white" size="lg">
                  <Icon icon="tabler:send" width="24" height="24" />
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
};
export default Chats;
