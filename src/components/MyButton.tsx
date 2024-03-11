import { Icon } from '@iconify/react';

interface MyButtonProps {
  loading: boolean;
}

export default function MyButton({ loading }: MyButtonProps) {
  return (
    <button
      disabled={loading}
      className="disabled:bg-neutral-400 disabled:text-300 disabled:cursor-not-allowed"
    >
      {loading ? (
        '...'
      ) : (
        <Icon icon="tabler:send" width="30" height="30" />
      )}
    </button>
  );
}
