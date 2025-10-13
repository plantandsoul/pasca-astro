import type {
  SharedWysiwygTextComponent
} from '../../__generated__/Api';
import './wysiwyg.css';

type BlockRendererProps = {
  // TODO(culi): add support for other types of blocks.
  block:
    // | SharedMediaComponent
    // | SharedQuoteComponent
    // | SharedRichTextComponent
    // | SharedSliderComponent
    | SharedWysiwygTextComponent
  ;
};

/**
 * Strapi "blocks" are custom components that can be anything from image
 * sliders to quotes to markdown to wysiwyg editor outputs (html).
 */
const BlockRenderer = ({ block }: BlockRendererProps) => {
  switch (block.__component) {
    case 'shared.wysiwyg-text':
      return <div className='ck-content' key={block.id} dangerouslySetInnerHTML={{ __html: block.body || '' }} />;
    // TODO(culi): add support for other types of blocks.
    // case 'shared.rich-text':
    // case 'shared.media':
    // case 'shared.quote':
    // case 'shared.slider':
    default:
      return null;
  }
};

const BlocksRenderer = ({ blocks }: { blocks: BlockRendererProps['block'][] }) => {
  return (
    <>{blocks.map((block) => <BlockRenderer key={block.id} block={block} />)}</>
  )
};

export default BlocksRenderer;
