import { spreader } from '../utils/spreader';

interface MessageProps {
  imageUrl?: string;
  message: string;
  reversed?: boolean;
}

export default function Message({ message, imageUrl, reversed }: MessageProps) {
  return (
    <div
      className={spreader(
        'flex items-start space-x-2',
        reversed ? 'flex-row-reverse space-x-reverse' : ''
      )}
    >
      <div className="w-8 h-8 rounded-full bg-slate-400 mt-0.5" />
      <div
        className={spreader(
          'w-1/2 text-sm p-2 rounded-md',
          reversed ? 'bg-main' : 'bg-gray-400'
        )}
      >
        <p className="text-white">{message}</p>
      </div>
    </div>
  );
}
