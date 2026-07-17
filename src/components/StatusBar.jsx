export default function StatusBar() {
  return (
    <div className="statusbar">
      <span className="statusbar__green">⎇ main</span>
      <span>✓ 0 errors, 0 warnings</span>
      <div className="statusbar__spacer" />
      <span>UTF-8</span>
      <span>Ln 42, Col 7</span>
      <span>Azure ✓</span>
      <span className="statusbar__green">● online</span>
    </div>
  )
}
