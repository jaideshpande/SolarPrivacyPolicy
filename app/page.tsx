import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold text-slate-900 mb-4">
        Western PA Solar Installation
      </h1>
      <Link
        href="/privacy"
        className="text-slate-600 underline underline-offset-2 hover:text-slate-900"
      >
        Privacy Policy
      </Link>
    </div>
  );
}
