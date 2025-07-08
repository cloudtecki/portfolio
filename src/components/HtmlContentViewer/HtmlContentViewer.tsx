import DOMPurify from 'dompurify';

interface HtmlContentViewerProps {
  html: string;
  className?: string;
}

const HtmlContentViewer: React.FC<HtmlContentViewerProps> = ({
  html,
  className,
}) => {
  const cleanHtml = DOMPurify.sanitize(html);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  );
};

export default HtmlContentViewer;
