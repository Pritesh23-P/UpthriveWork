import clsx from 'clsx'

export function Logomark({ invert = false, filled, ...props }) {
  return (
    <svg
      viewBox="0 0 2048 1048"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
      className={clsx(
        invert ? 'fill-white' : 'fill-neutral-950',
        props.className
      )}
    >
      <g transform="translate(0,1048) scale(0.1,-0.1)">
        <path d="M7575 8278 c-3 -7 -4 -483 -3 -1058 l3 -1045 803 -3 802 -2 0 -1860
0 -1860 1060 0 1060 0 -2 252 -3 253 -802 3 -803 2 0 1860 0 1860 -805 0 -805
0 0 550 0 550 2415 0 2415 0 -2 253 -3 252 -2663 3 c-2125 2 -2664 0 -2667
-10z" />
        <path d="M10790 5070 l0 -1610 255 0 255 0 0 1355 0 1355 550 0 551 0 -4
-1542 c-3 -1703 0 -1614 -67 -1873 -41 -156 -79 -257 -159 -420 -152 -307
-364 -564 -638 -769 -291 -219 -593 -348 -968 -413 -141 -24 -509 -24 -650 0
-375 65 -677 194 -968 413 -274 205 -486 462 -638 769 -80 163 -118 264 -159
420 -66 255 -63 198 -67 1623 l-4 1292 -252 -2 -252 -3 0 -1280 c0 -1156 2
-1293 18 -1414 62 -480 239 -913 534 -1303 91 -121 287 -325 412 -429 210
-176 530 -361 785 -454 588 -216 1244 -216 1832 0 255 93 575 278 785 454 125
104 321 308 412 429 295 390 472 821 534 1303 16 123 18 278 18 1919 l0 1785
-1057 3 -1058 2 0 -1610z" />
      </g>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled,
  fillOnHover = false,
}) {
  return (
    <div
      className={clsx(
        'flex items-center gap-x-3',
        fillOnHover && 'group/logo',
        className,
      )}
    >
      <Logomark
        className="h-10 w-auto flex-shrink-0"
        invert={invert}
      />

      <span
        className={clsx(
          'text-lg font-semibold tracking-tight whitespace-nowrap',
          invert ? 'text-white' : 'text-neutral-950',
        )}
      >
        UpthriveWork
      </span>
    </div>
  )
}