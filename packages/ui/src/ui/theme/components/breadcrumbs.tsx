import { BarChart2Icon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

export const Breadcrumb: FC<Props> = ({ items }) => {
  return (
    <nav className="flex gap-1 items-center">
      <Link
        href="/admin"
        className="flex items-center gap-1 text-sm text-muted-foreground font-medium hover:text-foreground transition-colors"
      >
        <BarChart2Icon size={16} />
        dashboard
      </Link>
      <ChevronRightIcon width={16} className="text-muted-foreground" />
      {items.map((item, i) => (
        <div key={i}>
          {item.href !== undefined ? (
            <div>
              <Link
                href={item.href}
                className={`text-sm text-muted-foreground hover:text-foreground font-medium transition-colors`}
              >
                {item.label}
              </Link>
              <ChevronRightIcon width={16} className={`text-muted-foreground `} />
            </div>
          ) : (
            <span
              className={`text-sm text-muted-foreground hover:text-foreground font-medium transition-colors`}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

type Props = {
  items: {
    label: string;
    href?: string;
  }[];
};
