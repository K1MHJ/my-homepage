import next from "next"
import Link from "next/link"

export default function page1() {
  return (
    <Link href="/Sample">
      <button> Jump to Sample page</button>
    </Link>
  )
}
