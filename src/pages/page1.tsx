import next from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import styled from "styled-components";
import { NextPage } from "next";

const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background: red;
  border-radius: 16px;
 `
const Page1: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <Link href="/Sample">
        <button> Jump to Sample page</button>
      </Link>
      <div>
        <button onClick={() => router.push("/Sample")}> Jump(useRouter)</button>
      </div>
      <Badge>Hello World!!!!</Badge>
    </div>
  )
}

export default Page1
