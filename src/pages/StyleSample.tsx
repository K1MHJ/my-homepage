import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const H1 = styled.h1`
  color: red;
 `
const A1 = styled.a`
  color: blue;
`
type ButtonProps = {
  color: string
  backgroundColor: string
}

const Button = styled.button<ButtonProps>`
color: ${(props) => props.color};
background: ${(props) => props.backgroundColor};
border:2px solid ${(props) => props.color};
font-size:2em;
margin:1em;
padding:0.25em 1em;
border-radius:8px;
cursor:pointer;
`

const StyleSample: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <H1>
          Welcome to <A1 href="https://nextjs.org">Next.js!</A1>
        </H1>
      </main>
      <div>
        <Button backgroundColor="transparent" color="#FF0000">
          Hello
        </Button>
        <Button backgroundColor="#1E90FF" color="white">
          World
        </Button>
      </div>
    </div>
  )
}

export default StyleSample
