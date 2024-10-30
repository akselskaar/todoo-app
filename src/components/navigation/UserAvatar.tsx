'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

type UserAvatarProps = {
  name?: string | null
  image?: string | null
}

const UserAvatar = ({ name, image }: UserAvatarProps) => {
  // Get initials from name
  const getInitials = (name: string | undefined | null) => {
    if (!name) return 'NN'
    const [firstName, lastName] = name.split(' ')
    return `${firstName.charAt(0)}${lastName ? lastName.charAt(0) : ''}`
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <>
          <Avatar>
            {image != undefined && image != null ? (
              <AvatarImage src={image} />
            ) : (
              <AvatarFallback>{getInitials(name)}</AvatarFallback>
            )}
          </Avatar>
          <span className='sr-only'>Profile menu</span>
        </>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href='/api/auth/signout?callbackUrl=/'>Sign out</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default UserAvatar
