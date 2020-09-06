import styled from 'styled-components'
import { TYPO, MEDIA_QUERY, COLOR } from 'const'

const Section = styled.section`
  margin-top: 60px;

  .${TYPO.h2} {
    color: var(${COLOR.accent});
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
  const content = `Hi, I'm Gear!

I like to create and style the websites, make them fast and easy to use as it can be. I care deeply about the UI and UX, how to gain organic traffics for the sites while also try to find the best Developer experience. I'm kind of addicted to problem-solving, or the feeling of solving it, they are always a good challenge to have.

I appreciate and love music, stories, football, and awesome people!`

  return (
    <Section>
      <h1 className={TYPO.h1}>Chalermkried Sudjanakobkul</h1>
      <h2 className={TYPO.h2}>Front End Engineer</h2>
      <p className={TYPO.body1}>{content}</p>
    </Section>
  )
}

export default About
