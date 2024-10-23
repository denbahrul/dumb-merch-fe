export default function ProfileDetail({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <p className="font-bold text-red md:text-lg">{title}</p>
      <p className="font-extralight">{content}</p>
    </div>
  );
}
