import { TYPO, cssQuery, BREAKPOINT, ICON } from 'const'
import styled from 'styled-components'
import Icon from 'components/shared/icon'
import { useMemo } from 'react'
import ExpCard from './card'

const Section = styled.section`
  margin-top: 72px;
  height: 80vh;

  .${TYPO.h1} {
    ${cssQuery(BREAKPOINT.belowTablet)`
      padding: 0 20px;
      text-align: center;
    `}
  }

  .${TYPO.body1} {
    margin-top: 24px;

    ${cssQuery(BREAKPOINT.belowTablet)`
      padding: 0 20px;
    `}
  }
`

const CARD_LIST = [
  {
    desc: 'Something',
    icon: ICON.terminal,
    skills: ['skill1', 'skill2'],
    subtitle: 'Pomelofashion',
    title: 'Senior Front End Engineer',
    titleCaption: '2020',
  },
  {
    desc: 'Something',
    icon: ICON.terminal,
    skills: ['skill1', 'skill2'],
    subtitle: 'Pomelofashion',
    title: 'Front End Engineer',
    titleCaption: '2018-2019',
  },
  {
    desc: 'Something',
    icon: ICON.terminal,
    skills: ['skill1', 'skill2'],
    subtitle: '7 Peaks Software',
    title: 'Junior Front End Developer',
    titleCaption: '2017-2018',
  },
  {
    desc: 'Something',
    icon: ICON.library,
    skills: ['skill1', 'skill2'],
    subtitle: 'Srinakharinwirot University',
    title: 'Student',
    titleCaption: '2014-2017',
  },
]

function Exp() {
  const expCardsJsx = useMemo(
    () =>
      CARD_LIST.map((card) => (
        <ExpCard
          desc={card.desc}
          key={`${card.title}${card.titleCaption}`}
          iconJsx={<Icon src={card.icon} />}
          skills={card.skills}
          subtitle={card.subtitle}
          title={card.title}
          titleCaption={card.titleCaption}
        />
      )),
    [],
  )

  return (
    <Section>
      <h1 className={TYPO.h1}>Experience</h1>
      <p className={TYPO.body1}>This will be my experience!</p>
      {expCardsJsx}
    </Section>
  )
}

export default Exp
