import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TYPO } from 'const'

const Div = styled.div`
  display: flex;
  margin: 12px 0 24px;

  .icon-wrapper {
    flex-shrink: 0;
  }

  .content-wrapper {
    margin-left: 16px;
    padding-right: 48px;
  }

  .title-caption {
    margin-left: 8px;
  }

  .desc {
    margin: 12px 0;
  }
`

function ExpCard({ desc, iconJsx, skills, subtitle, title, titleCaption }) {
  return (
    <Div>
      <div className="icon-wrapper">{iconJsx}</div>
      <div className="content-wrapper">
        <h3 className={TYPO.h3}>{title}</h3>
        <span className={`${TYPO.caption1} title-caption`}>
          ({titleCaption})
        </span>
        <br />
        <span className={TYPO.subtitle1}>{subtitle}</span>
        <p className={`${TYPO.body2} desc`}>{desc}</p>
        {skills.map((skill) => (
          <div key={skill}>{skill}</div>
        ))}
      </div>
    </Div>
  )
}

ExpCard.propTypes = {
  desc: PropTypes.string,
  iconJsx: PropTypes.node,
  skills: PropTypes.arrayOf(PropTypes.string),
  subtitle: PropTypes.string,
  title: PropTypes.string,
  titleCaption: PropTypes.string,
}

ExpCard.defaultProps = {
  desc: '',
  iconJsx: null,
  skills: [],
  subtitle: '',
  title: '',
  titleCaption: '',
}

export default ExpCard
