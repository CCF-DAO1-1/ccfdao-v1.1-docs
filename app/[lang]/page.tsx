import Link from 'next/link';
import { i18n } from '@/lib/i18n';

export default async function HomePage(props: PageProps<'/[lang]'>) {
  const params = await props.params;
  const { lang } = params;

  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">
        {lang === 'zh' ? 'CKB Community Fund DAO 1.1 文档' : 'CKB Community Fund DAO 1.1 Documentation'}
      </h1>
      <p>
        {lang === 'zh' ? '您可以打开 ' : 'You can open '}
        <Link href={`/${lang}/docs`} className="font-medium underline">
          /docs
        </Link>
        {lang === 'zh' ? ' 查看文档。' : ' and see the documentation.'}
      </p>
    </div>
  );
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
