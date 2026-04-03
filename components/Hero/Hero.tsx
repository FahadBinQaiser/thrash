export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen w-full items-center justify-center"
    >
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <p className="text-sm tracking-widest text-white/60 mb-4">
          For Personal Branding Strategist and Content Creators
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white max-w-5xl leading-tight mb-6">
          10x your LinkedIn output without sounding like everyone else.
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mb-10">
          Thrash learns your tone from one post and writes the rest. No ChatGPT
          slop. No generic hooks. Just your voice, multiplied.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition">
            Try Your First Post Free
          </button>
          <button className="border border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition">
            See a Real Example
          </button>
        </div>
      </div>
    </section>
  );
}
