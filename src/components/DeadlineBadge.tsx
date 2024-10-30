import React from 'react'

type BadgeProps = {
  icon: JSX.Element
  days: number | undefined
}

const variants = {
  neutral: 'bg-gray-a3 text-gray-a11',
  warning: 'bg-yellow-200 text-yellow-900',
  danger: 'bg-red-200 text-red-900',
}

const DeadlineBadge = ({ icon, days }: BadgeProps) => {
  const variant = days ? (days > 3 ? 'warning' : 'danger') : 'neutral'

  return (
    <div
      className={`flex gap-2 py-1 px-2 items-center place-self-start min-w-[5rem] rounded-sm ${variants[variant]}`}
    >
      {icon && React.cloneElement(icon, { className: 'size-4' })}
      <span className='text-sm'>{days ? days + ' days' : 'No deadline'}</span>
    </div>
  )
}
export default DeadlineBadge
