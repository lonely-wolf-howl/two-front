'use client';

import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Chats() {
  const router = useRouter(() => {});

  const handleOnClick = () => {
    const fetchPostRoom = async () => {
      try {
        const response = await axios.post(
          `http://localhost:4000/api/chats/${id}`,
          form,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 201) {
          // ...
        } else {
          console.error('POST ROOM ERROR');
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPostRoom();

    router.push(`/chat/${id}`);
  };

  return (
    <div onClick={handleOnClick} className="px-4 py-4 divide-y-[1px]">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
        <div className="flex py-3 cursor-pointer items-center space-x-3">
          <div className="w-12 h-12 bg-slate-500 rounded-full" />
          <div className="flex flex-col">
            <span className="font-medium">우준호</span>
            <span className="text-sm text-gray-400">내일 봐요!</span>
          </div>
        </div>
      ))}
    </div>
  );
}
