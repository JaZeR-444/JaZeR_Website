import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function enablePreview() {
  draftMode().enable()
  redirect('/')
}

export async function disablePreview() {
  draftMode().disable()
  redirect('/')
}