'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/icons'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export function SubmitButton({ children }: ButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Creating...' : children}
      {pending && <Spinner className="ml-2 animate-spin size-4" />}
    </Button>
  )
}
