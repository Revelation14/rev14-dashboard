/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-prop-types */
import type { ReactElement } from 'react';
import { useState } from 'react';

interface ITab {
  label: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Tab = ({ className = '', children }: ITab) => {
  return <div className={`${className}`}>{children}</div>;
};

type TabChildrenType = ReactElement<ITab>[];

interface ITabEvent {
  activeTabIndex: number;
  activeTabLabel: string;
  previousTabIndex: number;
}

interface ITabs {
  activeIndex?: number;
  className?: string;
  children: TabChildrenType;
  onTabChange?: (_event: ITabEvent) => any;
  headerComponent?: React.ReactNode;
  horizontalScroll?: boolean;
  hasBorder?: boolean;
}

interface ITabHeading {
  horizontalScroll: boolean;
  slideTo: (index: number) => void;
  activeTabIndex: number;
  children: TabChildrenType;
}

const TabHeadings = ({
  horizontalScroll,
  slideTo,
  activeTabIndex,
  children,
}: ITabHeading) => {
  return (
    <div
      className={`flex outline-none ${
        horizontalScroll ? 'flex-nowrap' : 'flex-wrap'
      } scrollbar justify-start overflow-x-auto`}
    >
      {children.map((tab, i) => {
        const tabProps = tab.props;
        return tabProps.label && tabProps.label.length > 0 ? (
          <div className="flex-none" key={i}>
            <button
              type="button"
              className={`pl-3 pr-5 ${
                activeTabIndex === i
                  ? 'border-b-4 border-black pb-[0.8rem] pt-4'
                  : 'py-4'
              } m-0 rounded-none text-lg`}
              onClick={() => slideTo(i)}
            >
              {tabProps.label}
            </button>
          </div>
        ) : null;
      })}
    </div>
  );
};

export function Tabs({
  activeIndex = 0,
  className = '',
  children,
  onTabChange,
  headerComponent,
  horizontalScroll = true,
  hasBorder = true,
}: ITabs) {
  const [activeTabIndex, setActivetabIndex] = useState(activeIndex);

  const slideTo = (index: number) => {
    // @ts-ignore
    const tabProps: ITab = children[index].props;
    if (onTabChange)
      onTabChange({
        activeTabIndex: index,
        activeTabLabel: tabProps.label,
        previousTabIndex: activeTabIndex,
      });
    setActivetabIndex(index);
  };

  return (
    <div className={`${className}`}>
      <div
        className={`mb-8 flex flex-wrap items-center justify-between ${
          hasBorder && 'mt-0 border-b border-gray-200'
        }`}
      >
        <TabHeadings
          horizontalScroll={horizontalScroll}
          slideTo={slideTo}
          activeTabIndex={activeTabIndex}
        >
          {children}
        </TabHeadings>
        {headerComponent && headerComponent}
      </div>
      {children[activeTabIndex]}
    </div>
  );
}
