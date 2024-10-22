export default function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="text-red mb-4 text-lg font-semibold md:text-3xl">{title}</h1>
  );
}
