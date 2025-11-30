import React from 'react'

export default function AllTaskSearch() {
  return (
    <div className="relative w-full sm:w-64">
        <svg
            className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            ></path>
        </svg>
        <input
            type="search"
            id="card-search"
            placeholder="Search tasks"
            className="w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
        />
    </div>
  )
}
