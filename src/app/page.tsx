import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="my-auto flex flex-col items-center gap-5 *:font-medium">
        <span className="text-8xl text-main font-extrabold italic">TWO</span>
        <h2 className="text-2xl font-bold">Welcome to Today's WorkOut!</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link href="/signup" className="primary-btn">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/signin" className="hover:underline underline-offset-4">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
