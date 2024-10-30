'use client'

import { Button } from '@/components'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type FormDialogProps = {
  buttonText: string
  buttonVariant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
  title: string
  description?: string
  children: React.ReactNode
  open?: boolean
  setOpen?: (open: boolean) => void
}

const FormDialog = ({
  buttonText,
  buttonVariant,
  title,
  description,
  children,
  open,
  setOpen,
}: FormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={buttonVariant ? buttonVariant : 'default'}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}
export default FormDialog
