import { FunctionComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useClipboard } from 'use-clipboard-copy'

import { getBaseUrl } from '../utils/tools'

const DownloadBtn: FunctionComponent<{ downloadUrl: string }> = ({ downloadUrl }) => {
  const { asPath } = useRouter()
  const clipboard = useClipboard()

  return (
    <div className="flex flex-wrap space-x-2 justify-center">
      <Toaster
        toastOptions={{
          style: {
            background: '#316C23',
            color: '#ffffff',
          },
        }}
      />
      <a
        className="flex-shrink-0 w-36 flex space-x-4 items-center justify-center bg-blue-500 rounded py-2 px-4 text-white focus:outline-none focus:ring focus:ring-blue-300 hover:bg-blue-600 mb-2"
        href={downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon="file-download" />
        <span>Download</span>
      </a>
      <button
        className="flex-shrink-0 w-48 flex space-x-4 items-center justify-center bg-yellow-500 rounded py-2 px-4 text-white focus:outline-none focus:ring focus:ring-yellow-300 hover:bg-yellow-600 mb-2"
        onClick={() => {
          clipboard.copy(`${getBaseUrl()}/api?path=${asPath}&raw=true`)
          toast.success('Copied direct link to clipboard.')
        }}
      >
        <FontAwesomeIcon icon="copy" />
        <span>Copy direct link</span>
      </button>
    </div>
  )
}

export default DownloadBtn
