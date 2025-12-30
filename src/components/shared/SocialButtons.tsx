import { Linkedin, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

// =============================================================================
// LinkedIn Button
// =============================================================================

interface LinkedInButtonProps {
  /**
   * Button label.
   * @default "LinkedIn Profile"
   */
  label?: string
  /**
   * Button variant.
   * @default "default"
   */
  variant?: 'default' | 'outline'
  /**
   * Button size.
   * @default "default"
   */
  size?: 'default' | 'sm' | 'lg'
  /**
   * Whether to use the icon only (no label).
   * @default false
   */
  iconOnly?: boolean
}

export function LinkedInButton({
  label = 'LinkedIn Profile',
  variant = 'default',
  size = 'default',
  iconOnly = false
}: LinkedInButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className='gap-2'>
      <a
        href='https://www.linkedin.com/in/nicoswan/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Linkedin className={size === 'lg' ? 'size-5' : 'size-4'} />
        {!iconOnly && label}
      </a>
    </Button>
  )
}

// =============================================================================
// Contact Button
// =============================================================================

interface ContactButtonProps {
  /**
   * Button label.
   * @default "Contact Me"
   */
  label?: string
  /**
   * Button variant.
   * @default "outline"
   */
  variant?: 'default' | 'outline'
  /**
   * Button size.
   * @default "default"
   */
  size?: 'default' | 'sm' | 'lg'
}

export function ContactButton({
  label = 'Contact Me',
  variant = 'outline',
  size = 'default'
}: ContactButtonProps) {
  return (
    <Button asChild variant={variant} size={size} className='gap-2'>
      <Link href='/contact'>
        <FileText className={size === 'lg' ? 'size-5' : 'size-4'} />
        {label}
      </Link>
    </Button>
  )
}

// =============================================================================
// Social Buttons Group
// =============================================================================

interface SocialButtonsProps {
  /**
   * LinkedIn button label.
   */
  linkedInLabel?: string
  /**
   * Contact button label.
   */
  contactLabel?: string
  /**
   * Whether to show the contact button.
   * @default true
   */
  showContact?: boolean
}

export function SocialButtons({
  linkedInLabel = 'LinkedIn Profile',
  contactLabel = 'Contact Me',
  showContact = true
}: SocialButtonsProps) {
  return (
    <div className='flex gap-3'>
      <LinkedInButton label={linkedInLabel} />
      {showContact && <ContactButton label={contactLabel} />}
    </div>
  )
}
