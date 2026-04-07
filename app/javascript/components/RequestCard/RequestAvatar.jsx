export default function RequestAvatar({ guestName }) {
  return (
    <div className="flex-shrink-0">
      <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 font-semibold text-lg">
        {guestName.charAt(0).toUpperCase()}
      </div>
    </div>
  );
}
