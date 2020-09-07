import styled from 'styled-components'
import { TYPO, MEDIA_QUERY, COLOR } from 'const'
import { EL_ABOUT } from 'const/element'
import { CONTENT_ABOUT } from 'const/content'

const Section = styled.section`
  scroll-margin-top: 80px;
  margin-top: 60px;

  .${TYPO.h2} {
    color: var(${COLOR.secondary});
  }

  .${TYPO.body1} {
    margin-top: 48px;
    white-space: pre-line;
  }

  @media ${MEDIA_QUERY.belowTablet} {
    margin-top: 24px;

    .${TYPO.h1}, .${TYPO.h2} {
      padding: 0 20px;
      text-align: center;
    }

    .${TYPO.body1} {
      padding: 0 20px;
    }
  }
`

function About() {
  return (
    <Section id={EL_ABOUT}>
      <h1 className={TYPO.h1}>{CONTENT_ABOUT.title}</h1>
      <h2 className={TYPO.h2}>{CONTENT_ABOUT.subtitle}</h2>
      <p className={TYPO.body1}>{CONTENT_ABOUT.desc}</p>
    </Section>
  )
}

export default About
