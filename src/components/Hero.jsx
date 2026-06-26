export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00e5ff20,transparent_60%)]" />

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <p className="text-cyan-400 uppercase tracking-[6px] text-sm">
              AMANNY STORE MLBB TOP-UP
            </p>

            <h1 className="text-6xl md:text-7xl font-black mt-5 leading-none">
              Recharge
              <br />
              MLBB Diamonds
              <br />
              <span className="text-cyan-400">
                in 60 Seconds
              </span>
            </h1>

            <p className="text-gray-400 mt-6 max-w-xl">
              Fast, secure and trusted Mobile Legends
              diamond recharge. Instant delivery after
              payment confirmation.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#servers"
                className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold"
              >
                Recharge Now
              </a>

              <a
                href="https://wa.me/917629970920"
                target="_blank"
                className="border border-cyan-500 px-8 py-4 rounded-xl"
              >
                Contact
              </a>

            </div>

          </div>

          <div className="relative flex justify-center">

            <div className="w-96 h-96 rounded-full border border-cyan-500/30 absolute animate-pulse" />

            <div className="w-72 h-72 rounded-full border border-cyan-500/20 absolute" />

            <div className="w-40 h-40 border-4 border-cyan-400 rotate-45 rounded-3xl shadow-[0_0_50px_#00e5ff]" />

          </div>

        </div>

      </div>

    </section>
  );
}
