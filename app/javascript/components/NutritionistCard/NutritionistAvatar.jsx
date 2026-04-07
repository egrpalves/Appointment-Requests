export default function NutritionistAvatar({ photoUrl, name }) {
  return (
    <div className="shrink-0">
      <img
        src={
          photoUrl ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=dcf5e7&color=166a3c&size=80`
        }
        alt={name}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-brand-100"
      />
    </div>
  );
}
