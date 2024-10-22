export default function ProfileDetail({
  title,
  content,
}: {
  title: string;
  content: string;
}) {
  return (
    <div>
      <p className="text-red text-xl font-bold">{title}</p>
      <p>{content}</p>
    </div>
  );
}
