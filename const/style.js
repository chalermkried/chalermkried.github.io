import { css } from 'styled-components'

const COLOR = {
  primary: '--p',
  neutral: '--n',
  secondary: '--s',
  lighten: '--l',
  accent: '--a',
  accentEmp: '--ae',
}

const MEDIA_QUERY = {
  belowTablet: '(max-width: 767px)',
  smallPhone: '(max-width: 480px)',
  highDesktop: '(min-width: 1281px)',
  tabletOnly: '(min-width: 768px) and (max-width: 1024px)',
}

const CONTAINER_STYLE = css`
  margin: auto;
  width: 80%;
  max-width: 720px;

  @media ${MEDIA_QUERY.belowTablet} {
    width: 100%;
  }
`
export { CONTAINER_STYLE, COLOR, MEDIA_QUERY }
