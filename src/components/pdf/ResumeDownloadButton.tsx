'use client'

import { PDFDownloadLink } from '@react-pdf/renderer'
import { ResumePDF } from './ResumePDF'
import { Button } from '@/components/ui/button'
import { FileDown, Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'

export const ResumeDownloadButton = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <Button variant='outline' disabled className='gap-2'>
        <FileDown className='size-4' />
        Download Resume
      </Button>
    )
  }

  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName='Nico_Swan_Resume.pdf'
      style={{ textDecoration: 'none' }}
    >
      {({ loading }) => (
        <Button variant='outline' disabled={loading} className='gap-2'>
          {loading ? (
            <Loader2 className='size-4 animate-spin' />
          ) : (
            <FileDown className='size-4' />
          )}
          Download Resume
        </Button>
      )}
    </PDFDownloadLink>
  )
}
