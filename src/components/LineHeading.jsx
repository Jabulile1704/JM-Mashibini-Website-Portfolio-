export default function LineHeading({ line, letter, title, children }) {
  return (
    <div className="line-heading">
      <span className={`roundel tm-${line}`} aria-hidden="true">
        {letter}
      </span>
      <div>
        <h2 className="line-heading__title">{title}</h2>
        {children && <p className="line-heading__sub">{children}</p>}
      </div>
    </div>
  )
}
