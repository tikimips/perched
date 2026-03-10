import Link from "next/link";
import { IconPerch } from "./Icon";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const iconSize = size === "sm" ? 18 : size === "lg" ? 28 : 22;
  const textClass = size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-[17px]";
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <IconPerch size={iconSize} className="text-[#1d1d1f]" />
      <span className={`font-semibold text-[#1d1d1f] tracking-tight ${textClass}`}>Perched</span>
    </Link>
  );
}
