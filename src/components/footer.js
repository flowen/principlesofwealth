import React, { useState } from 'react'
import profileImage from '../assets/images/profile-img.jpg'

const Footer = () => {
  const [themeDark, setThemeDark] = useState(true)

  if (themeDark) {
    document.documentElement.classList.remove('theme-light')
    document.documentElement.classList.add('theme-dark')
    // document.documentElement.style.setProperty('--color-primary', '#000')
    // document.documentElement.style.setProperty('--color-secondary', '#fff')
  } else {
    document.documentElement.classList.remove('theme-dark')
    document.documentElement.classList.add('theme-light')
    // document.documentElement.style.setProperty('--color-primary', '#fff')
    // document.documentElement.style.setProperty('--color-secondary', '#000')
  }

  return (
    <footer className="footer">
      <div className="footer__menu-wrapper">
        <label htmlFor="menu" className="footer__label">
          <img src={profileImage} alt="Made by Rou Hun Fan" className="footer__menu-img" />
        </label>

        <input type="checkbox" name="menu" id="menu" className="footer__menu-checkbox" />

        <ul className="footer__menu-list">
          <li className="footer__menu-item">
            <label htmlFor="color-switch" className="footer__switch-label"></label>

            <input
              type="checkbox"
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
