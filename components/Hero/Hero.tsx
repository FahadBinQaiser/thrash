import { sora } from "@/lib/fonts";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen pt-20 bg-[#2b2d42] w-full items-center justify-center"
    >
      <div
        className={`${sora.className} font-normal relative z-10 flex flex-col items-center text-center px-4`}
      >
        <p className="text-sm tracking-widest text-[#8d99ae] mb-2">
          For Personal Branding Strategist and Content Creators
        </p>
        <h1
          className={`${sora.className} font-semibold text-5xl text-[#edf2f4] max-w-5xl leading-tight mb-6`}
        >
          <span className="text-[#ef233c]">10x your LinkedIn output</span>{" "}
          without sounding like everyone else.
        </h1>
        <p className="text-lg md:text-xl text-[#8d99ae] text-balance max-w-2xl mb-10">
          Thrash learns your tone from one post and writes the rest. No ChatGPT
          tone and the same BS anymore.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" label="Try Your First Post Free" />
          <Button variant="secondary" label="See a Real Example" />
        </div>
      </div>
    </section>
  );
}
