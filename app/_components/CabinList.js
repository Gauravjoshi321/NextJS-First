import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "@/app/_components/CabinCard";


export default async function CabinList({ filter }) {
  // CHANGE
  const cabins = await getCabins();

  let displayCabins;
  if (filter === "all") displayCabins = cabins;
  if (filter === "small") displayCabins = cabins.filter(elem => elem.maxCapacity <= 3);
  if (filter === "medium") displayCabins = cabins.filter(elem => elem.maxCapacity > 3 && elem.maxCapacity <= 7);
  if (filter === "large") displayCabins = cabins.filter(elem => elem.maxCapacity > 7);

  return <>
    {
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {displayCabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    }
  </>
}