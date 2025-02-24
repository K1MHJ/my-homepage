import type { AppProps } from 'next/app';
import '../styles/globals.css'; // 스타일 적용
import PageLayout from './PageLayout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  );
}
