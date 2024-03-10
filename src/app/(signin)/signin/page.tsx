'use client';

import { useRouter } from 'next/navigation';
import FormInput from '@components/FormInput';
import FormButton from '@components/FormButton';
import SocialLogin from '@components/SocialLogin';
import { useForm, FieldErrors } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

interface SigninForm {
  email: string;
  password: string;
}

export default function Signin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SigninForm>();
  const onValid = (data: SigninForm) => {
    setLoading(true);
    fetchSignin(data);
    reset();
    setLoading(false);
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  const fetchSignin = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/signin',
        data,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        const result = await response.data;
        const {
          accessToken,
          accessTokenExpiresIn,
          refreshToken,
          refreshTokenExpiresIn,
        } = await result.data;

        document.cookie = `accessToken=${accessToken}; expires=${accessTokenExpiresIn}; path=/;`;
        document.cookie = `refreshToken=${refreshToken}; expires=${refreshTokenExpiresIn}; path=/;`;

        router.push('/dashboard');
      } else {
        console.error('SIGNIN ERROR');
      }
    } catch (error) {
      console.error('SIGNIN AXIOS ERROR: ', error);
    }
  };

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex flex-col gap-2 *font-medium">
        <h1 className="text-2xl">로그인</h1>
      </div>
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className="flex flex-col gap-3"
      >
        <div>
          <FormInput
            register={register('email', {
              required: '이메일을 입력해 주세요.',
            })}
            type="email"
            label="이메일"
          />
          <FormInput
            register={register('password', {
              required: '비밀번호를 입력해 주세요.',
            })}
            type="password"
            label="비밀번호"
          />
        </div>
        <FormButton loading={loading} text="로그인" />
      </form>
      <SocialLogin />
    </div>
  );
}
