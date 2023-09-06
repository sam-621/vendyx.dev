import { ArrowUpTrayIcon } from '@heroicons/react/24/outline'

export const Dropzone = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 hover:border-gray-200 border-dashed rounded-lg cursor-pointer dark:hover:bg-bray-800 dark:border-gray-600 dark:hover:border-gray-500 transition-colors"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-2">
          <ArrowUpTrayIcon width={24} />
          <p className="text-sm text-gray-500 dark:text-gray-400">Accepts .jpg and .png</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
  )
}
