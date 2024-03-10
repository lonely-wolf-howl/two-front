import Link from 'next/link';

export default function TopBarWithGoBack() {
  return (
    <div className="bg-main w-full max-w-xl text-lg font-bold py-4 fixed top-0 justify-center flex items-center">
      <Link href="/chats">
        <div className="flex flex-row space-x-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          <span>채팅 목록으로 돌아가기</span>
        </div>
      </Link>
    </div>
  );
}
