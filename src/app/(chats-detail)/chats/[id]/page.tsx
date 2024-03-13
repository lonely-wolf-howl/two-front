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
  userId: string;
  message: string;
}

export default function ChatsDetail({ params }: Params) {
  let { id: chatRoomId } = params;
  chatRoomId = 'f33c1d86-5718-4fcb-b550-5b9a950a44fc';
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<MessageForm[]>([]);
  const [userId, setUserId] = useState(new Date());
  const { getAccessToken } = useAuth();
  const accessToken = getAccessToken();
  const { register, handleSubmit, reset } = useForm<MessageForm>();

  useEffect(() => {
    const options = {
      transports: ['websocket'],
      query: { id: chatRoomId, token: accessToken },
    };
    const socket = io(`http://localhost:8080/chats`, options);
    setSocket(socket);

    socket.on('connect', () => {
      console.log('WEBSOCKET CONNECTED!');
      socket.emit('join', { roomId: chatRoomId });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const onValid = (message: MessageForm) => {
    setLoading(true);
    if (socket) {
      socket.emit('message', { ...message, userId, chatRoomId });
    }
    setMessages((prev) => [...prev, { ...message, userId }]);
    reset();
    setLoading(false);
  };

  useEffect(() => {
    if (socket) {
      socket.on('message', (message: MessageForm) => {
        console.log('MESSAGE FROM SERVER:', message);
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [socket]);

  return (
    <div className="py-4 px-4">
      <div className="py-6 space-y-3">
        {messages.map((message, index) => {
          return (
            <Message
              key={index}
              message={message.message}
              reversed={message.userId === userId}
            />
          );
        })}
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
}
