import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
      <Link href="/" className="flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/logo.png" alt="Jolbastau" width={40} height={40} className="rounded-md" />
        <span className="text-lg font-semibold tracking-tight">Jolbastau</span>
      </Link>
      <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900">
        Войти
      </Link>
    </header>
  );
}
