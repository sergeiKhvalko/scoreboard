export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const {} = query
  console.log(await searchParams);
  console.log(await searchParams["season"]);
  console.log(await searchParams["league"]);

  return <div>Leagues</div>;
}
