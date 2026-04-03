import { sora } from "@/app/layout";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen bg-[#2b2d42] w-full items-center justify-center"
    >
      <div
        className={`${sora.className} font-normal relative z-10 flex flex-col items-center text-center px-4`}
      >
        <p className="text-sm tracking-widest text-[#8d99ae] mb-4">
          For Personal Branding Strategist and Content Creators
        </p>
        <h1
          className={`${sora.className} font-semibold text-5xl md:text-6xl text-[#edf2f4] max-w-5xl leading-tight mb-6`}
        >
          10x your LinkedIn output without sounding like everyone else.
        </h1>
        <p className="text-lg md:text-xl text-[#8d99ae] max-w-2xl mb-10">
          Thrash learns your tone from one post and writes the rest. No ChatGPT
          slop. No generic hooks. Just your voice, multiplied.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-[#ef233c] text-[#edf2f4] font-semibold px-8 py-4 rounded-full hover:bg-[#d90429] transition">
            Try Your First Post Free
          </button>
          <button className="border-b-5 border-t border-[#edf2f4] text-[#edf2f4] px-8 py-4 rounded-full hover:bg-[#8d99ae]/10 transition">
            See a Real Example
          </button>
        </div>
      </div>
    </section>
  );
}
