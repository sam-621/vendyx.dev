export function TableSkeleton() {
  return (
    <div role="status" className="flex flex-col gap-3 animate-pulse">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="w-32 h-3 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          <div className="w-20 h-3 bg-gray-200 rounded-md dark:bg-gray-700"></div>
        </div>
        <div className="flex gap-2">
          <div className="w-20 h-3 bg-gray-200 rounded-md dark:bg-gray-700"></div>
        </div>
      </div>
      <div className="w-full p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow dark:divide-gray-700 md:p-6 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-md dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </div>
          <div className="h-2.5 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-md dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </div>
          <div className="h-2.5 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-md dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </div>
          <div className="h-2.5 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-md dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </div>
          <div className="h-2.5 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-md dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          </div>
          <div className="h-2.5 bg-gray-300 rounded-md dark:bg-gray-700 w-12"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
      <div className="flex justify-between">
        <div className="w-32 h-3 bg-gray-200 rounded-md dark:bg-gray-700"></div>
        <div className="flex gap-3">
          <div className="w-16 h-3 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          <div className="w-16 h-3 bg-gray-200 rounded-md dark:bg-gray-700"></div>
          <div className="w-16 h-3 bg-gray-200 rounded-md dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
