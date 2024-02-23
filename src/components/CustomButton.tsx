import React from 'react';
import { Button } from '@nextui-org/react';

export default function CustomButton({ text }: { text: string }) {
  return (
    <Button className="bg-main text-white font-bold" size="md">
      {text}
    </Button>
  );
}
