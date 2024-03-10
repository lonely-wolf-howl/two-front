import { Button } from '@nextui-org/react';

export default function MyButton({ text }: { text: string }) {
  return (
    <Button className="bg-main text-white font-medium" size="md">
      {text}
    </Button>
  );
}