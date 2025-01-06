export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(searchParams["season"]);

  return <div>AllLeagues</div>;
}
