import Markdoc, { RenderableTreeNode } from '@markdoc/markdoc';
import { Search } from 'lucide-react';
import React, { FC, createContext } from 'react';

import LandingNavbar from './LandingNavbar';
import {
  Fence,
  MarkdocButton,
  ProseContainer,
  TOC,
  TableOfContents,
  useTableOfContents,
} from './MarkdocLayout';
import { Collapse } from '../ui/Collapse';
import { CollapseGroup } from '../ui/CollapseGroup';
import { ContentImage } from '../ui/ContentImage';
import { DocsPrompt } from '../ui/DocsPrompt';
import { Heading } from '../ui/Heading';
import { Key } from '../ui/Key';
import { Note } from '../ui/Note';
import { Pattern } from '../ui/Pattern';
import { Video } from '../ui/Video';
import { YouTube } from '../ui/YouTube';

export const MarkdocContext = createContext<any>(undefined);

type DocsLayoutProps = {
  content: RenderableTreeNode;
  toc: TOC;
};

export const DocsLayout: FC<DocsLayoutProps> = ({ content, toc }: any) => {
  const { currentSection, registerHeading, unregisterHeading } =
    useTableOfContents(toc);

  return (
    <>
      <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 sm:px-8">
        <Pattern />
        <MarkdocContext.Provider value={{ registerHeading, unregisterHeading }}>
          <div className="fixed top-0 left-0 right-0 z-30 h-24 bg-black/30 backdrop-blur">
            <div className="mx-auto max-w-screen-xl px-6 sm:px-8">
              <LandingNavbar noAnimation />
            </div>
          </div>
          <div className="relative mx-auto min-h-screen max-w-screen-xl">
            <div className="hidden-scrollbar fixed inset-0 top-24 left-[max(0px,calc(50%-40rem))] right-auto z-20 hidden w-72 overflow-y-auto px-6 pb-10 sm:px-8 md:block">
              <div className="mt-[26px] flex flex-col gap-1 pb-12">
                <div className="mb-4 w-full">
                  <DocsPrompt>
                    <button
                      className="flex w-full transform flex-row items-center gap-2 rounded-md border border-neutral-900 p-2 text-left text-sm text-neutral-500 outline-none transition duration-300 hover:bg-neutral-1000"
                      aria-label="Ask docs"
                    >
                      <Search className="h-4 w-4 flex-none text-neutral-500" />
                      <div className="flex-grow truncate">Search or ask AI</div>
                      <Key
                        cmdCtrl
                        className="select-none rounded border-neutral-800 bg-neutral-1000 px-1 py-0.5 font-sans text-xs font-medium"
                      >
                        K
                      </Key>
                    </button>
                  </DocsPrompt>
                </div>
                <TableOfContents toc={toc} currentSection={currentSection} />
              </div>
            </div>
            <div className="relative w-full max-w-full overflow-hidden pt-32 md:pl-72">
              <ProseContainer>
                {Markdoc.renderers.react(content, React, {
                  components: {
                    Button: MarkdocButton,
                    Collapse,
                    CollapseGroup,
                    ContentImage,
                    Fence,
                    Heading,
                    Note,
                    Video,
                    YouTube,
                  },
                })}
              </ProseContainer>
              <div className="h-[600px]" />
            </div>
          </div>
        </MarkdocContext.Provider>
      </div>
    </>
  );
};
