import { TYPO, ICON, MEDIA_QUERY } from 'const'
import styled from 'styled-components'
import { useMemo } from 'react'
import ExpCard from './card'

const CARD_LIST = [
  {
    desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    icon: ICON.terminal,
    skills: ['skill1', 'skill2'],
    subtitle: 'Pomelofashion',
    title: 'Senior Front End Engineer',
    titleCaption: '2020',
  },
  {
    desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    icon: ICON.terminal,
    skills: ['skill1', 'skill2'],
    subtitle: 'Pomelofashion',
    title: 'Front End Engineer',
    titleCaption: '2018 - 2019',
  },
  {
    desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    icon: ICON.terminal,
    skills: ['skill1', 'skill2'],
    subtitle: '7 Peaks Software',
    title: 'Junior Front End Developer',
    titleCaption: '2017 - 2018',
  },
  {
    desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
    icon: ICON.library,
    skills: ['skill1', 'skill2'],
    subtitle: 'Srinakharinwirot University',
    title: 'Student',
    titleCaption: '2014 - 2017',
  },
]

const Section = styled.section`
  margin-top: 72px;

  > .title {
    margin-bottom: 36px;
  }

  @media ${MEDIA_QUERY.belowTablet} {
    margin-top: 48px;
    padding: 0 16px;

    > .title {
      text-align: center;
    }
  }
`

function Exp() {
  const expCardsJsx = useMemo(
    () =>
      CARD_LIST.map((card) => (
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
    <Section>
      <span className={`${TYPO.h2} title`}>Experience</span>
      {expCardsJsx}
    </Section>
  )
}

export default Exp
