import styled from 'styled-components'
import PropTypes from 'prop-types'

const Div = styled.div`
  margin: 8px 0 16px;
  display: flex;

  .content-wrapper {
  }
`

function ExpCard({ desc, iconJsx, skills, subtitle, title, titleCaption }) {
  return (
    <Div>
      {iconJsx}
      <div className="content-wrapper">
        <span>{title}</span>
        <span>({titleCaption})</span>
        <br />
        <span>{subtitle}</span>
        <p>{desc}</p>
        {skills.map((skill) => (
          <div>{skill}</div>
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
