import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. Built with React, deployed to Azure Static Web
        Apps via GitHub Actions.
      </p>
    </footer>
  )
}
