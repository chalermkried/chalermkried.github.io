import { css } from 'styled-components'

const COLOR = {
  primary: '--p',
  neutral: '--n',
  secondary: '--s',
  accent: '--a',
}

const BREAKPOINT = {
  belowTablet: 'bt',
  smallPhone: 'sp',
  highDesktop: 'hd',
  tabletOnly: 'to',
}

const MEDIA_QUERY = {
  [BREAKPOINT.belowTablet]: '(max-width: 767px)',
  [BREAKPOINT.smallPhone]: '(max-width: 480px)',
  [BREAKPOINT.highDesktop]: '(min-width: 1281px)',
  [BREAKPOINT.tabletOnly]: '(min-width: 768px) and (max-width: 1024px)',
}

function cssQuery(key) {
  return (style) => `@media ${MEDIA_QUERY[key]} { ${style} }`
}

const CONTAINER_STYLE = css`
  margin: auto;
  width: 70%;
  max-width: 720px;

  ${cssQuery(BREAKPOINT.belowTablet)`
    width: 100%;
  `}
`
export { cssQuery, BREAKPOINT, CONTAINER_STYLE, COLOR }
