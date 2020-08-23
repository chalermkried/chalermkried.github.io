import { TYPO, cssQuery, BREAKPOINT } from 'const/style'
import styled from 'styled-components'

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

function Exp() {
  return (
    <Section>
      <h1 className={TYPO.h1}>Experience</h1>
      <p className={TYPO.body1}>This will be my experience!</p>
    </Section>
  )
}

export default Exp
