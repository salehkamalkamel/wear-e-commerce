import Button from "../../ui/Button";
import { useMemo } from "react";

export default function ShowMore({
  onLoadMore,
  hasMore,
  displayedItems,
  totalItems,
}) {
  const loadPercentage = useMemo(
    () => Math.floor((displayedItems / totalItems) * 100),
    [displayedItems, totalItems]
  );

  const progressBarWidth = `${loadPercentage}%`;

  return (
    <div className="flex flex-col gap-4 relative items-center">
      <div className="w-60 h-2 rounded-full bg-custom-black-20">
        <div
          style={{ width: progressBarWidth }}
          className="h-full bg-primary rounded-full"
        ></div>
      </div>
      <p className="text-sm mt-2">
        Showing {displayedItems} of {totalItems} items
      </p>
      <Button
        size="small"
        type="secondary"
        className="w-fit"
        onClick={onLoadMore}
        disabled={!hasMore}
      >
        {hasMore ? "Show More" : "No More Items"}
      </Button>
    </div>
  );
}
