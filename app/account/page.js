import { auth } from "../_lib/auth"

export default async function page() {
  const session = await auth()
  const user = session?.user?.name.split(' ').at(0);

  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, {user}
    </h2>
  )
}