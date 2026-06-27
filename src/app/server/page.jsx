"use client";

import Link from "next/link";

const servers = [
  {
    name: "🇮🇳 India Server",
    link: "/india",
    color: "border-cyan-500",
  },
  {
    name: "🇺🇸 USA Server",
    link: "/usa",
    color: "border-pink-500",
  },
  {
    name: "🇸🇬 Singapore Server",
    link: "/singapore",
    color: "border-yellow-500",
  },
  {
    name: "🇮🇩 Indonesia Server",
    link: "/indonesia",
    color: "border-green-500",
  },
  {
    name: "🇲🇾 Malaysia Server",
    link: "/malaysia",
    color: "border-purple-500",
  },
  {
    name: "🇵🇭 Philippines Server",
    link: "/philippines",
    color: "border-red-500",
  },
  {
    name: "🇧🇷 Brazil Server",
    link: "/brazil",
    color: "border-orange-500",
  },
];

export default function Servers() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div className="max-w-7xl mx-auto p-6">

        <h1 className="text-5xl font-bold text-center text-cyan-400 mb-12">
          SELECT SERVER
        </h1>

        <div className="grid md:grid-cols-3 gap-6">

          {servers.map((server, index) => (
            <Link
              key={index}
              href={server.link}
              className={`bg-gray-900 p-8 rounded-3xl border ${server.color} hover:scale-105 transition`}
            >
              <h2 className="text-2xl font-bold text-center">
                {server.name}
              </h2>

              <button className="w-full mt-6 bg-cyan-500 py-3 rounded-xl font-bold">
                Open
              </button>

            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}
