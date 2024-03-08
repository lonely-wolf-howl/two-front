'use client';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  ScrollShadow,
} from '@nextui-org/react';
import CardTitle from '@components/CardTitle';
import MyButton from '@components/MyButton';
import { Icon } from '@iconify/react';
import Message from '@components/Message';
import { useForm } from 'react-hook-form';
import useMutation from '@hooks/useMutation.ts';

interface MessageForm {
  message: string;
}

const Chats = () => {
  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const onValid = (form: MessageForm) => {
    reset();
  };
  const [] = useMutation(``);

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
                <div className="py-5 divide-y-[1px]">
                  {[1, 2, 3, 4, 5, 6].map((id) => (
                    <div
                      key={id}
                      className="flex px-4 cursor-pointer py-3 items-center space-x-3 hover:bg-zinc-100"
                    >
                      <div className="w-12 h-12 rounded-full bg-slate-300" />
                      <div>
                        <p className="text-gray-700">Steve Jobs</p>
                        <p className="text-sm  text-gray-500">
                          See you tomorrow in the corner at 2pm!
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollShadow>
            </CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex justify-between items-center">
              <CardTitle text="대화창" />
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <ScrollShadow className="h-[400px] mt-5">
                <div className="px-4 py-5 space-y-4">
                  <Message message="Hi, How much are you selling for?" />
                  <Message message="I want 20,000" reversed />
                  <Message message="You are crazy" />
                </div>
              </ScrollShadow>
              <form
                onSubmit={handleSubmit(onValid)}
                className="flex items-center mt-5"
              >
                <Input
                  type="text"
                  {...register('message', { required: true })}
                  className="mr-2"
                  size="sm"
                  radius="md"
                />
                <Button className="bg-main text-white" size="lg">
                  <Icon icon="tabler:send" width="24" height="24" />
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
};
export default Chats;
