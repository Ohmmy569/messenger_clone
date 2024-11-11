import React from 'react';
import Image from 'next/image';
import logo from '@public/logo.png';

export default function Navbar() {
  return (
    <div
      className="navbar bg-base-100 py-0"
      style={{
        minHeight: '55px',
      }}
    >
      <div className="flex-1 ">
        <div className="w-10 rounded-full">
          <Image
            src={logo}
            alt="Tailwind CSS Navbar component"
            width={40}
            height={40}
          />
        </div>
        <a className="btn btn-ghost text-xl">Messenger</a>
      </div>
      <div className="flex-none ">
        <div className="dropdown dropdown-end my-0">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full ">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
