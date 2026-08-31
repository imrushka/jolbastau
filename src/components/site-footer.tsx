import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 px-6 py-6 text-sm text-gray-600">
      <p>ИП &quot;Искаков Бахром Юсупович&quot;</p>
      <p>Адрес: Казахстан, г.Алматы, Тастак2, 21, 84</p>
      <Link href="/privacy" className="mt-2 inline-block underline hover:text-gray-900">
        Политика конфиденциальности
      </Link>
    </footer>
  );
}
