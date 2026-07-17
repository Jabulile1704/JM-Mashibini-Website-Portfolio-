export default function SectionHeading({ number, file, children }) {
  return (
    <>
      <div className="section-file">
        <span className="section-file__num">{number}</span> // {file}
      </div>
      <h2 className="section-title">{children}</h2>
    </>
  )
}
