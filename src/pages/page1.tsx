import next from "next"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Page1() {
  const router = useRouter();

  return (
    <div>
      <Link href="/Sample">
        <button> Jump to Sample page</button>
      </Link>
      <div>
        <button onClick={() => router.push("/Sample")}> Jump(useRouter)</button>
      </div>
    </div>
  )
}
