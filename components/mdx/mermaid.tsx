'use client';

import { useEffect, useId, useState } from 'react';
import { useTheme } from 'next-themes';

export interface MermaidProps {
  chart: string;
}

export function Mermaid({ chart }: MermaidProps): React.ReactElement {
  const id = useId();
  const { resolvedTheme } = useTheme();
  const [svg, setSvg] = useState<string>('');

  useEffect(() => {
    const renderChart = async () => {
      const mermaid = (await import('mermaid')).default;

      mermaid.initialize({
        startOnLoad: false,
        theme: resolvedTheme === 'dark' ? 'dark' : 'default',
        securityLevel: 'loose',
      });

      try {
        const { svg: renderedSvg } = await mermaid.render(
          `mermaid-${id.replace(/:/g, '')}`,
          chart.trim()
        );
        setSvg(renderedSvg);
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        setSvg(`<pre style="color: red;">Mermaid Error: ${error}</pre>`);
      }
    };

    renderChart();
  }, [chart, id, resolvedTheme]);

  return (
    <div
      className="my-4 flex justify-center overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
