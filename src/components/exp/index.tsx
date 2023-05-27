import { TYPO, MEDIA_QUERY, CONTENT_EXP, EL_EXP } from '@/const'
import styled from 'styled-components'
import { useMemo } from 'react'
import { ExpCard } from './card'

const Section = styled.section`
  scroll-margin-top: 96px;
  margin-top: 72px;

  > .title {
    margin-bottom: 36px;
  }

  @media ${MEDIA_QUERY.belowTablet} {
    padding: 0 16px;

    > .title {
      text-align: center;
    }
  }
`

export function Exp() {
  const expCardsJsx = useMemo(
    () =>
      CONTENT_EXP.data.map((card) => (
        <ExpCard
          desc={card.desc}
          key={`${card.title}${card.titleCaption}`}
          icon={card.icon}
          skills={card.skills}
          subtitle={card.subtitle}
          title={card.title}
          titleCaption={card.titleCaption}
        />
      )),
    [],
  )

  return (
    <Section id={EL_EXP}>
      <span className={`${TYPO.h2} title`}>{CONTENT_EXP.title}</span>
      {expCardsJsx}
    </Section>
  )
}
