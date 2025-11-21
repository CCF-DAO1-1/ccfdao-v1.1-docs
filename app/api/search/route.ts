import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';

export const { GET } = createFromSource(source, {
  // Support both English and Chinese search
  // https://docs.orama.com/docs/orama-js/supported-languages
  localeMap: {
    en: { language: 'english' },
    zh: {
      // Don't specify language when using custom tokenizer
      components: {
        tokenizer: createTokenizer(),
      },
    },
  },
});
