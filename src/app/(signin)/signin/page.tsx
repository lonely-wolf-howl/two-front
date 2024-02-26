'use client';

import React, { useState } from 'react';
import { Button, Card, CardBody, Image, Input, Link } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const {
          accessToken,
          accessTokenExpiresIn,
          refreshToken,
          refreshTokenExpiresIn,
        } = await response.json();

        document.cookie = `accessToken=${accessToken}; expires=${accessTokenExpiresIn}; path=/;`;
        document.cookie = `refreshToken=${refreshToken}; expires=${refreshTokenExpiresIn}; path=/;`;

        router.push('/');
      } else {
        console.error('signin fail.');
      }
    } catch (error) {
      console.error('error during  signin process', error);
    }
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              variant="flat"
              label="비밀번호"
              className="py-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-default-500 text-center py-3">
              계정이 없으신가요?{' '}
              <Link showAnchorIcon href="/signup">
                회원가입
              </Link>
            </p>
            <Button
              size="lg"
              className="bg-main text-white mt-3 mb-3"
              onClick={handleSignin}
            >
              로그인
            </Button>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
