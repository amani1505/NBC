import type { PaginationEllipsisProps } from "@/types/pagination";
import { MoreHorizontal } from "lucide-react";

const DynamicPaginationEllipsis: React.FC<PaginationEllipsisProps> = ({
  className = "",
}) => (
  <span
    className={`flex h-10 w-10 items-center justify-center ${className}`}
    aria-hidden
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);

export default DynamicPaginationEllipsis;
