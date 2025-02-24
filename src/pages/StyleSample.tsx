import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const H1 = styled.h1`
  color: red;
 `
const A1 = styled.a`
  color: blue;
`

const StyleSample: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <H1>
          Welcome to <A1 href="https://nextjs.org">Next.js!</A1>
        </H1>
      </main>
    </div>
  )
}

export default StyleSample
