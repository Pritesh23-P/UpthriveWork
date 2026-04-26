import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Gurgaon" invert={invert}>
          Plot No. 21, Sector 44
          <br />
          Gurgaon, Haryana 122003, India
        </Office>
      </li>
      <li>
        <Office name="Bangalore" invert={invert}>
          3rd Floor, Prestige Tech Park
          <br />
          Bangalore, Karnataka 560103, India
        </Office>
      </li>
    </ul>
  )
}
