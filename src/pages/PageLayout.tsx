export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>페이지 전용 레이아웃</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2025 Dovob</p>
      </footer>
    </div>
  )
}
