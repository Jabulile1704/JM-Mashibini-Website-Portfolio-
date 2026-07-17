import { profile } from '../data.js'

export default function TitleBar({ treeOpen, onToggleTree }) {
  return (
    <div className="titlebar">
      <button
        className="titlebar__burger"
        aria-label={treeOpen ? 'Close explorer' : 'Open explorer'}
        onClick={onToggleTree}
      >
        ☰
      </button>
      <div className="titlebar__lights" aria-hidden="true">
        <span className="titlebar__light titlebar__light--red" />
        <span className="titlebar__light titlebar__light--yellow" />
        <span className="titlebar__light titlebar__light--green" />
      </div>
      <div className="titlebar__tab">
        <span className="titlebar__tab-dot">●</span>
        <span className="titlebar__tab-name">{profile.tab}</span>
        <span className="titlebar__tab-close">×</span>
      </div>
      <div className="titlebar__spacer" />
      <a className="titlebar__cv" href={import.meta.env.BASE_URL + profile.cvFile} download>
        ⤓ Download CV
      </a>
    </div>
  )
}
