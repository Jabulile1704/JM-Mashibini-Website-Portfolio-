import { profile, tree } from '../data.js'

export default function FileTree({ active, goTo, open }) {
  return (
    <nav className={`filetree ${open ? 'filetree--open' : ''}`}>
      <div className="filetree__label">EXPLORER</div>
      <div className="filetree__root">
        <span className="filetree__caret">▾</span> <span className="filetree__project">PORTFOLIO</span>
      </div>
      {tree.map((f) => (
        <button
          key={f.id}
          className={`filetree__item ${active === f.id ? 'filetree__item--active' : ''}`}
          onClick={() => goTo(f.id)}
        >
          <span className="filetree__icon" style={{ color: f.color }}>
            {f.icon}
          </span>
          {f.name}
        </button>
      ))}
      <div className="filetree__spacer" />
      <div className="filetree__links">
        <div>// links</div>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            github/Jabulile1704
          </a>
        </div>
        <div>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            in/jabulile-mashibini
          </a>
        </div>
      </div>
    </nav>
  )
}
