import styled from 'styled-components'
import { COLOR, TYPO } from '@/const'
import { ReactNode } from 'react'

const Div = styled.div`
  background-color: var(${COLOR.secondary});
  color: var(${COLOR.neutral});
  border-radius: 48px;
  padding: 4px 8px;
`

export function Chip({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <Div className={`${TYPO.caption2}${className ? ` ${className}` : ''}`}>
      {children}
    </Div>
  )
}
