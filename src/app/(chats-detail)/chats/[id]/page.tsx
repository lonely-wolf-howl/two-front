'use client';

import { Button, Input } from '@nextui-org/react';
import Message from '@components/Message';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import MyButton from '@components/MyButton';
import axios from 'axios';
import { useAuth } from '@hooks/useAuth.ts';
import io from 'socket.io-client';

interface Params {
  params: { id: string };
}

interface MessageForm {
  message: string;
}

export default function ChatsDetail({ params }: Params) {
  const { id: chatRoomId } = params;
  const [loading, setLoading] = useState(false);
  const { getCookie } = useAuth();
  const { register, handleSubmit, reset } = useForm<MessageForm>();
  const onValid = (form: MessageForm) => {
    setLoading(true);
    // fetchPostMessage(form, id);
    reset();
    setLoading(false);
  };

  useEffect(() => {
    const options = {
      transports: ['websocket'],
      extraHeaders: { id: chatRoomId, token: getCookie('accessToken') },
    };
    const socket = io(`http://localhost:8080/chats`, options);

    socket.on('connect', () => {
      console.log('WebSocket connected.');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const fetchPostMessage = async (form, id) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/api/chats/${id}/message`,
        form,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getCookie('accessToken')}`,
          },
        }
      );

      if (response.status === 201) {
        // ...
      } else {
        console.error('POST MESSAGE ERROR');
      }
    } catch (error) {
      console.error(error);
    }
  };

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
          <MyButton loading={loading} />
        </form>
      </div>
    </div>
  );
  z;
}
