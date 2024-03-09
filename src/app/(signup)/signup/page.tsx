import React from 'react';
import { Radio, RadioGroup } from '@nextui-org/react';
import FormInput from '@components/FormInput';
import FormButton from '@components/FormButton';
import SocialLogin from '@components/SocialLogin';

export default function Signup() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *font-medium">
        <h1 className="text-2xl">회원가입</h1>
      </div>
      <form className="flex flex-col gap-3">
        <div>
          <FormInput type="text" label="이름" />
          <FormInput type="email" label="이메일" />
          <FormInput type="number" label="이메일 인증번호" />
          <FormInput type="password" label="비밀번호" />
          <FormInput type="password" label="비밀번호 확인" />
          <RadioGroup label="성별" orientation="horizontal" className="py-3">
            <Radio value="male">남</Radio>
            <Radio value="female">여</Radio>
          </RadioGroup>
          <FormInput type="number" label="출생연도" />
        </div>
        <FormButton loading={false} text="회원가입" />
      </form>
      <SocialLogin />
    </div>
  );
}
