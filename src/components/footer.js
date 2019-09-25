import React from 'react'
import profileImage from '../assets/images/profile-img.jpg'

const Footer = ({ themeDark, setThemeDark, menuOpen, setMenuOpen }) => {
  if (typeof window === `undefined`) return null

  console.log(themeDark, menuOpen)

  return (
    <footer className="footer">
      <div className="footer__menu-wrapper">
        <label htmlFor="menu" className="footer__label" data-active-theme={themeDark}>
          <img src={profileImage} alt="Made by Rou Hun Fan" className="footer__menu-img" />
        </label>

        <input
          type="checkbox"
          name="menu"
          id="menu"
          className="footer__menu-checkbox"
          onClick={() => setMenuOpen(!menuOpen)}
          defaultChecked={menuOpen}
        />

        <ul className="footer__menu-list">
          <li className="footer__menu-item footer__switch">
            <label
              htmlFor="color-switch"
              className="footer__switch-label"
              data-active-theme={themeDark}
            >
              <svg
                className="footer__switch-icon svg-moon-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M22.3 12.9c-.3-.3-.6-.4-1-.2-.7.2-1.5.3-2.3.3-4.4 0-8-3.6-8-8 0-.8.1-1.6.3-2.3.1-.4 0-.7-.2-1-.3-.3-.6-.4-1-.2C5.9 2.7 3 6.6 3 11c0 1.8.5 3.5 1.4 5H9c1.7 0 3 1.3 3 3 0 .7-.3 1.3-.7 1.9.5.1 1.1.1 1.7.1 4.4 0 8.3-2.9 9.6-7.1.1-.4 0-.7-.3-1z" />
                <path d="M9 20H1c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1zM13 24H5c-.6 0-1-.4-1-1s.4-1 1-1h8c.6 0 1 .4 1 1s-.4 1-1 1z" />
              </svg>

              <svg
                className="footer__switch-icon svg-sun-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <path d="M0 11h3v2H0zM2.807 4.222l1.414-1.415L6.343 4.93 4.928 6.343zM11 0h2v3h-2zM17.657 4.929l2.121-2.122 1.414 1.415-2.121 2.12zM21 11h3v2h-3zM17.657 19.071l1.414-1.414 2.122 2.121-1.415 1.415zM11 21h2v3h-2zM2.807 19.778l2.122-2.12 1.414 1.413-2.122 2.122z" />
                <circle cx="12" cy="12" r="7" />
              </svg>
            </label>

            <input
              type="checkbox"
              defaultChecked={themeDark}
              name="color-switch"
              id="color-switch"
              className="footer__switch-checkbox"
              onClick={() => setThemeDark(!themeDark)}
            />
          </li>
          <li className="footer__menu-item">
            <a
              href="https://twitter.com/flowen_nl"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__menu-anchor"
              title="Rou Hun's Twitter"
            >
              <svg
                className="svg-twitter-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
              >
                <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm6.4 12.7v.4c0 4.3-3.3 9.3-9.3 9.3-1.9 0-3.6-.5-5-1.5h.8c1.5 0 3-.5 4.1-1.4-1.4 0-2.6-1-3.1-2.3.2 0 .4.1.6.1.3 0 .6 0 .9-.1-1.5-.3-2.6-1.6-2.6-3.2.4.2.9.4 1.5.4-.9-.6-1.5-1.6-1.5-2.7 0-.6.2-1.2.4-1.7 1.6 2 4 3.3 6.8 3.4-.1-.2-.1-.5-.1-.7 0-1.8 1.5-3.3 3.3-3.3.9 0 1.8.4 2.4 1 .7-.1 1.5-.4 2.1-.8-.2.8-.8 1.4-1.4 1.8.7-.1 1.3-.3 1.9-.5-.6.8-1.2 1.4-1.8 1.8z" />
              </svg>
            </a>
          </li>
          <li className="footer__menu-item">
            <a
              href="https://flowen.me"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__menu-anchor footer__menu-anchor--rh-icon"
              title="Rou Hun's portfolio"
            >
              <svg
                className="svg-rh-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="32"
                height="32"
              >
                <path d="M43.7 39c-1.9 0-3.4-.4-4.5-1.2-1.1-.8-1.7-1.9-1.7-3.4v-4.1h1.4c.3 0 .6 0 .7-.1.2 0 .4-.1.5-.2.2-.2.3-.4.3-.7V29h-7.1v.3c0 .3.1.6.2.7.1.1.2.2.4.2s.4.1.6.1H36v6.9c-1.1.7-2.1 1.2-3 1.4-1 .2-2 .4-3 .4-1.9 0-3.4-.4-4.5-1.2-1.1-.8-1.7-1.9-1.7-3.4V13.1c.7-.8 1.6-1.3 2.7-1.7 1.1-.4 2.2-.6 3.4-.6 1.7 0 3.2.4 4.3 1.3 1.3.9 1.9 2.3 1.9 3.9v4h3v-.3c0-.4-.1-.6-.3-.7-.1-.2-.4-.3-.7-.3h-.6v-5.6c.7-.8 1.6-1.3 2.7-1.7 1.1-.4 2.2-.6 3.4-.6 1.7 0 3.2.4 4.3 1.3 1.3.9 1.9 2.3 1.9 3.9v21.4c-1.7 1-3.7 1.6-6.1 1.6z" />
                <path d="M20 39.1c-1.5 0-2.8-.4-3.9-1.1-1.4-.9-2.5-2.3-3.2-4.3l-.8-2.2h-.2c-.6 0-1.3-.1-2.2-.2h-.1l-.1.1c-.1.1-.2.3-.2.6 0 .2.1.5.6.6.3.1.7.2 1.2.2l1.2 3v1.7c-1.6 1.1-3.7 1.7-6.2 1.7-1.8 0-3.3-.4-4.3-1.1C.7 37.4.2 36.3.2 34.9V14.3c0-.3.1-.5.4-.8.3-.3.7-.6 1.3-.9 1.1-.6 2.7-1.1 4.5-1.4 1.9-.4 3.8-.6 5.6-.6 4.3 0 7.6.9 10 2.6 2.5 1.8 3.8 4.4 3.8 7.7 0 1.9-.5 3.5-1.6 4.8-1 1.3-2.4 2.3-4 2.8l-.2.1v.2c0 .3.1.5.3.6.2.1.4.2.7.2.6 0 1.3-.3 2.2-.9l3.5 3.6c-.3 2.2-1 3.8-2.1 5-1 1.2-2.6 1.8-4.6 1.8zm-7.3-19.3h-.4c-.1 0-.2 0-.2.1l-.2.1v3.7l.2.1H12.7c.3 0 .6-.1.8-.4.2-.3.2-.6.2-1.2v-.8c0-.6-.1-1-.2-1.2-.1-.1-.2-.3-.3-.3-.2 0-.4-.1-.5-.1z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
