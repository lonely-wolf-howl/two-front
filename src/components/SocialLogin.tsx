import Link from 'next/link';

export default function SocialLogin() {
  return (
    <>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-6">
        <Link
          href=""
          className="primary-btn flex items-center justify-center gap-3"
        >
          <span>구글 로그인</span>
        </Link>
      </div>
    </>
  );
}
