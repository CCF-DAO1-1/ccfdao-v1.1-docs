import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from './i18n';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'CKB Community Fund DAO 1.1',
    },
    i18n,
  };
}
