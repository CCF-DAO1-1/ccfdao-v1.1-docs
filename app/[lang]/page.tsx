import { redirect } from 'next/navigation';
import { i18n } from '@/lib/i18n';

export default async function HomePage(props: PageProps<'/[lang]'>) {
  const params = await props.params;
  const { lang } = params;

  redirect(`/${lang}/docs`);
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
