import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TYPO, MEDIA_QUERY, COLOR } from 'const'
import Icon from 'components/shared/icon'
import Chip from 'components/shared/chip'
import { useMemo } from 'react'

const iconSize = 32
const iconMargin = 20

const WrapperDiv = styled.div`
  margin: 16px 0 32px;
  padding-right: 64px;

  .subtitle {
    display: block;
    color: var(${COLOR.secondary});
    margin-top: 4px;
  }

  .desc {
    margin: 12px 0;
  }

  .skill-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 8px;
  }

  .subtitle,
  .desc,
  .skill-wrapper {
    padding-left: ${iconSize + iconMargin}px;

    @media ${MEDIA_QUERY.belowTablet} {
      padding-left: 0;
    }
  }

  @media ${MEDIA_QUERY.belowTablet} {
    margin: 16px 8px 40px;
    padding-right: 0;

    .subtitle {
      text-align: center;
      margin-top: 8px;
    }
  }
`

const TitleDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .icon {
    flex-shrink: 0;
    margin-right: ${iconMargin}px;
    width: ${iconSize}px;
    height: ${iconSize}px;
  }

  .title {
    display: inline-block;
  }

  .title-caption {
    color: var(${COLOR.lighten});
    margin-left: 8px;
  }

  @media ${MEDIA_QUERY.belowTablet} {
    justify-content: center;

    .icon {
      flex-basis: 100%;
      margin-right: 0;
      width: 40px;
      height: 40px;
    }

    .title-caption {
      flex-basis: 100%;
      text-align: center;
      margin-left: 0;
    }
  }
`

function ExpCard({ desc, icon, skills, subtitle, title, titleCaption }) {
  const skillsJsx = useMemo(
    () => skills.map((skill) => <Chip key={skill}>{skill}</Chip>),
    [skills],
  )

  return (
    <WrapperDiv>
      <TitleDiv>
        <Icon src={icon} />
        <h3 className={`${TYPO.h3} title`}>{title}</h3>
        <span className={`${TYPO.caption1} title-caption`}>
          ({titleCaption})
        </span>
      </TitleDiv>
      <span className={`${TYPO.subtitle1} subtitle`}>{subtitle}</span>
      <p className={`${TYPO.body2} desc`}>{desc}</p>
      <div className="skill-wrapper">{skillsJsx}</div>
    </WrapperDiv>
  )
}

ExpCard.propTypes = {
  desc: PropTypes.string,
  icon: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  subtitle: PropTypes.string,
  title: PropTypes.string,
  titleCaption: PropTypes.string,
}

ExpCard.defaultProps = {
  desc: '',
  icon: '',
  skills: [],
  subtitle: '',
  title: '',
  titleCaption: '',
}

export default ExpCard
