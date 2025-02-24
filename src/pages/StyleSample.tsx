import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import styled, { css } from 'styled-components'

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

//빨간색 경계선을 표시하는 스타일
const redBox = css`
padding:0.25em 1em;
border:3px solid #ff0000;
border-radius:10px;
`
//파란색을 표시하는 스타일
const font = css`
color:#1e90ff;
font-size:2em;
`

//빨간색 경계선과 파란색 스타일을 각각 적용하고, 배경이 투명한 버튼 콤포먼트
const Button2 = styled.button`
background: transparent;
margin: 1em;
cursor: pointer;
${redBox}
${font}
`
//파란색 글자의 스타일을 계승하고, 두꺼운 글자를 표시하는 컴포먼트
const Text = styled.p`
font-weight:bold;
${font}
`
const BorderedText = styled(Text)`
padding:8px 16px;
border:3px solid blue;
border-radius:8px;
`

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
      <div>
        {/*파란문자로 빨간색 경계선 버튼을 표시*/}
        <Button2>Hello</Button2>
        <Text>World</Text>
      </div>
      <div>
        <Text>Hello</Text>
        <BorderedText>World</BorderedText>
      </div>
    </div>
  )
}

export default StyleSample
