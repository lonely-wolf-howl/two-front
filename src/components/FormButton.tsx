interface FormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: FormButtonProps) {
  return (
    <button
      disabled={loading}
      className="primary-btn disabled:bg-neutral-400 disabled:text-300 disabled:cursor-not-allowed"
    >
      {loading ? '진행 중...' : text}
    </button>
  );
}
