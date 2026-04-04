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
        className="bg-[#d90429] cursor-pointer text-[#ffcccc] font-semibold px-8 py-4 rounded-full hover:bg-[#ef233c] transition"
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="border-2 border-[#ffcccc] cursor-pointer text-[#ffcccc] px-8 py-4 rounded-full hover:bg-[#ffcccc]/20 transition"
    >
      {label}
    </button>
  );
}
