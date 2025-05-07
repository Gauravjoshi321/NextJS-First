import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return <div className="grid justify-center items-center">
    <Spinner />
    <p>Loading cabins data...</p>
  </div>
}