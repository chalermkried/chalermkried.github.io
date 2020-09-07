import styled from 'styled-components'
import { TYPO, MEDIA_QUERY, COLOR, ICON } from 'const'
import { EL_ABOUT } from 'const/element'
import { CONTENT_ABOUT } from 'const/content'
import Icon from 'components/shared/icon'

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

  .desc {
    margin-bottom: 24px;
  }

  .link {
    display: inline-flex;
    align-items: center;
    color: var(${COLOR.accent});
    text-decoration: none;
    transition: color 0.2s ease-in-out;

    &.is-last {
      margin-left: 16px;
    }

    &:hover {
      color: var(${COLOR.accentEmp});
    }

    @media ${MEDIA_QUERY.belowTablet} {
      &:hover {
        color: inherit;
      }

      &:active {
        color: var(${COLOR.accentEmp});
      }
    }

    .icon {
      width: 20px;
      height: 20px;
      margin-right: 4px;
    }
  }

  @media ${MEDIA_QUERY.belowTablet} {
    margin-top: 24px;
    padding: 0 20px;
    text-align: center;
  }
`

function About() {
  return (
    <Section id={EL_ABOUT}>
      <h1 className={TYPO.h1}>{CONTENT_ABOUT.title}</h1>
      <h2 className={TYPO.h2}>{CONTENT_ABOUT.subtitle}</h2>
      <p className={`${TYPO.body1} desc`}>{CONTENT_ABOUT.desc}</p>
      <a
        className={`${TYPO.subtitle2} link`}
        href={CONTENT_ABOUT.linkedin}
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
        rel="noopener"
      >
        <Icon src={ICON.linkedin} /> LinkedIn
      </a>
      <a
        className={`${TYPO.subtitle2} link is-last`}
        href={CONTENT_ABOUT.github}
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
        rel="noopener"
      >
        <Icon src={ICON.github} /> Github
      </a>
    </Section>
  )
}

export default About
