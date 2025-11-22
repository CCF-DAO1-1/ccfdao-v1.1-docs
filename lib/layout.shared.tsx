import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from './i18n';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'CKB Community Fund DAO 1.1',
    },
    i18n,
    githubUrl: 'https://github.com/ccf-dao1-1/ccfdao-v1.1-docs'
  };
}
