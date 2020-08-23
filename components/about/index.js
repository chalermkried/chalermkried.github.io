import styled from 'styled-components'
import { TYPO, cssQuery, BREAKPOINT } from 'const/style'

const Section = styled.section`
  margin-top: 96px;

  ${cssQuery(BREAKPOINT.belowTablet)`margin-top: 24px;`}

  .${TYPO.h1},
  .${TYPO.h2} {
    ${cssQuery(BREAKPOINT.belowTablet)`
      padding: 0 20px;
      text-align: center;
    `}
  }

  .${TYPO.body1} {
    margin-top: 48px;
    white-space: pre-line;

    ${cssQuery(BREAKPOINT.belowTablet)`
      padding: 0 20px;
    `}
  }
`

function About() {
  const content = `Hi there!

I like to create and style the websites, make them fast and easy to use as it can be. I care deeply about the UI and UX, how to gain organic traffics to the sites while also try to find the best Developer experience. I'm kind of addicted to problem-solving, or the feeling of solving it, they are always a good challenge to have.

I appreciate and love music, good stories, football, and awesome people!`

  return (
    <Section>
      <h1 className={TYPO.h1}>Chalermkried Sudjanakobkul</h1>
      <h2 className={TYPO.h2}>Front End Engineer</h2>
      <p className={TYPO.body1}>{content}</p>
    </Section>
  )
}

export default About
