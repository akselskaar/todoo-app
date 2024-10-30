import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, intervalToDuration } from 'date-fns'
import { nb } from 'date-fns/locale'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (date: Date | null): string | null => {
  if (!date) return null
  return format(date, 'd MMMM, yyyy', { locale: nb })
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
