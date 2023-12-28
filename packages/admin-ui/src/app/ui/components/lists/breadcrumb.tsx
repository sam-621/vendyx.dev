import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { BarChart2Icon, ChevronRightIcon } from 'lucide-react';

export const Breadcrumbs: FC<Props> = ({ items }) => {
  return (
    <nav className="flex gap-1 items-center">
      <div>
        <Link
          to="/"
          className="flex items-center gap-1 text-sm text-muted-foreground font-medium hover:text-foreground transition-colors"
        >
          <BarChart2Icon size={16} />
          dashboard
        </Link>
      </div>
      <div>
        <ChevronRightIcon width={16} className="text-muted-foreground" />
      </div>
      {items.map((item, i) => (
        <div key={i} className="flex">
          {item.href !== undefined ? (
            <div className="flex items-center gap-1">
              <Link
                to={item.href}
                className={`text-sm text-muted-foreground hover:text-foreground font-medium transition-colors`}
              >
                {item.label}
              </Link>
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
