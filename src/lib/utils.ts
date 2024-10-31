import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, intervalToDuration } from 'date-fns'
import { enGB } from 'date-fns/locale'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date | null): string | null => {
  if (!date) return null
  return format(date, 'd MMMM, yyyy', { locale: enGB })
}

export const getDayDateDuration = (date: Date | null): number | undefined => {
  if (!date) return

  const start = new Date()

  const { days } = intervalToDuration({
    start,
    end: date,
  })

  return days
}

export const getDayDateDurationString = (
  date: Date | null
): string | undefined => {
  const days = getDayDateDuration(date)

  if (days === undefined) return 'No deadline'

  switch (true) {
    case days === 0:
      return 'Today'
    case days === 1:
      return 'Tomorrow'
    case days > 1:
      return `${days} days from now`
    case days < 0:
      return `${Math.abs(days)} days ago`
    default:
      return `${days} days`
  }
}
