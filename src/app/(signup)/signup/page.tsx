import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  Link,
  Radio,
  RadioGroup,
} from '@nextui-org/react';

export default function Signup() {
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
            <Input type="text" variant="flat" label="이름" className="py-3" />
            <div>
              <Input
                type="email"
                variant="flat"
                label="이메일"
                className="py-3"
              />
            </div>
            <Input
              type="number"
              variant="flat"
              label="이메일 인증번호"
              className="py-3"
            />
            <Input
              type="password"
              variant="flat"
              label="비밀번호"
              className="py-3"
            />
            <Input
              type="password"
              variant="flat"
              label="비밀번호 확인"
              className="py-3"
            />
            <RadioGroup label="성별" orientation="horizontal" className="py-3">
              <Radio value="male">남</Radio>
              <Radio value="female">여</Radio>
            </RadioGroup>
            <Input
              type="number"
              variant="flat"
              label="출생 연도"
              className="py-3"
            />
            <Button size="lg" className="bg-main text-white mt-3 mb-3">
              회원가입
            </Button>
          </CardBody>
        </Card>
      </div>
    </main>
  );
}
