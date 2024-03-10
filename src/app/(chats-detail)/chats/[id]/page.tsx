'use client';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Input,
  ScrollShadow,
} from '@nextui-org/react';
import MyButton from '@components/MyButton';
import { Icon } from '@iconify/react';
import Message from '@components/Message';
import { useForm } from 'react-hook-form';
import useMutation from '@hooks/useMutation.ts';

interface MessageForm {
  message: string;
}

export default function ChatsDetail() {
  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const onValid = (form: MessageForm) => {
    reset();
  };
  const [] = useMutation(``);

  return (
    <div className="py-4 px-4">
      <div className="py-6 space-y-3">
        <Message message="Hi, How much are you selling for?" />
        <Message message="I want 20,000" reversed />
        <Message message="You are crazy" />
      </div>
      <div className="fixed w-full mx-auto max-w-md bottom-0 left-0 right-0 px-4 pb-4 opacity-90">
        <form onSubmit={handleSubmit(onValid)} className="flex items-center">
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
      </div>
    </div>
  );
}
