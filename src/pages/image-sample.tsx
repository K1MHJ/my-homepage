import { NextPage } from "next"
import Image from "next/image"
import BibleImage from "../../public/images/bible.jpg"

const ImageSample = () => {
  return (
    <div>
      <h1>이미지표시비교</h1>
      <p> img탭으로 표시한 경우</p>
      통상이미지탭을 사용한 이미지를 표시
      <img src="/images/bible.jpg" />
      <p>Imageコンポーネントで表示した場合</p>
      Imageコンポーネントを使用して表示
      パスを指定する代わりに、インポートした画像を指定
      <Image src={BibleImage} alt="My Image" layout="intrinsic"/>
      <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
    </div>
  )
}

export default ImageSample;
