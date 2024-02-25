import React from 'react';
import { Button, Card, CardBody, Image, Input, Link } from '@nextui-org/react';

export default function Signin() {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div>
        <Image
          alt="Card background"
          className="object-cover rounded-full shadow-lg"
          src="images/logo.png"
          width={100}
        />
      </div>
      <div className="w-full max-w-md">
        <Card className="mt-10 px-5">
          <CardBody className="overflow-visible py-5">
            <Input
              type="email"
              variant="flat"
              label="이메일"
              className="py-3"
            />
            <Input
              type="password"
              variant="flat"
              label="비밀번호"
              className="py-3"
            />
            <p className="text-default-500 text-center py-3">
              계정이 없으신가요?{' '}
              <Link showAnchorIcon href="/signup">
                회원가입
              </Link>
              혹은&nbsp;
              <Link showAnchorIcon href={'/api/auth/signin'}>
                구글 로그인
              </Link>
            </p>
            <Button size="lg" className="bg-main text-white mt-3 mb-3">
              로그인
            </Button>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
