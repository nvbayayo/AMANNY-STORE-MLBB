import Link from "next/link";

const servers = [
  { name: "🇮🇳 India Server", link: "/india" },
  { name: "🇺🇸 USA Server", link: "/usa" },
  { name: "🇸🇬 Singapore Server", link: "/singapore" },
  { name: "🇮🇩 Indonesia Server", link: "/indonesia" },
  { name: "🇲🇾 Malaysia Server", link: "/malaysia" },
  { name: "🇵🇭 Philippines Server", link: "/philippines" },
  { name: "🇧🇷 Brazil Server", link: "/brazil" },
];

export default function Home() {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/home-bg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 p-6">
        <h1 className="text-5xl font-bold text-center text-cyan-400 mb-10">
          🔥 AMANNY STORE 🔥
        </h1>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {servers.map((server) => (
            <Link
              key={server.name}
              href={server.link}
              className="bg-gray-900/80 backdrop-blur-md p-6 rounded-2xl border border-cyan-500 hover:border-cyan-300 hover:scale-105 transition duration-300"
            >
              <h2 className="text-2xl font-bold text-center">
                {server.name}
              </h2>

              <button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-600 py-2 rounded-xl font-bold">
                Open Server
              </button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
