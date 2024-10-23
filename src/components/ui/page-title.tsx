export default function PageTitle({ title }: { title: string }) {
  return (
    <h1 className="mb-8 text-center text-2xl font-semibold text-red md:text-start md:text-3xl">
      {title}
    </h1>
  );
}
