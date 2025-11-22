import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CKB Community Fund DAO v1.1',
  description: 'CKB Community Fund DAO 1.1 Documentation',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return children;
}
