import fonts from './fonts'
import type { Icon } from './types'

const defaultOptions = {
  width: 64,
  height: 64,
  fonts
}

export default {
  targets: [
    {
      name: 'favicon.ico',
      fileType: 'png',
      options: defaultOptions
    },
    {
      name: 'icon.svg',
      fileType: 'svg',
      options: defaultOptions
    }
  ],
  element: (
    <div
      style={{ fontFamily: '"Golos Text Bold"' }}
      tw="bg-[#111111] text-[#22c55e] text-[52px] w-full h-full flex items-center justify-center rounded-[10px]"
    >
      O
    </div>
  )
} satisfies Icon
