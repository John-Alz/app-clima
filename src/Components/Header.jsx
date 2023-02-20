import React from 'react'

export default function Header() {
  return (
    <ul className="flex ml-auto w-full font-bold">
            <li className="text-xs text-gray-800 ml-auto mr-6 border-b-2 border-slate-900 cursor-pointer">Weather</li>
            <li className="text-xs text-gray-800 mr-6 alert-notice cursor-pointer border-b-2 hover:border-slate-900 ">Alerts</li>
            <li className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-slate-900 ">Map</li>
            <li className="text-xs text-gray-800 mr-6 cursor-pointer border-b-2 hover:border-slate-900 ">Satellite</li>
            <li className="text-xs text-gray-800 cursor-pointer border-b-2 hover:border-slate-900 ">News</li>
        </ul>
  )
}
