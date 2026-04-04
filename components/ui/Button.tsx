interface ButtonProps {
  label: string;
  variant: "primary" | "secondary";
  onClick?: () => void;
}

export default function Button({ label, variant, onClick }: ButtonProps) {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className="bg-[#ef233c]  cursor-pointer text-[#edf2f4] font-semibold px-8 py-4 rounded-full hover:bg-[#d90429] transition"
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="border-2 border-[#edf2f4] cursor-pointer text-[#edf2f4] px-8 py-4 rounded-full hover:bg-[#8d99ae]/10 transition"
    >
      {label}
    </button>
  );
}
