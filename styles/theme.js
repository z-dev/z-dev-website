const screenXsMin = 480
const screenSmMin = 768
const screenMdMin = 992
const screenLgMin = 1400
const lgGridMargin = 50
const screenLgWidth = screenLgMin - 2 * lgGridMargin

export default {
  screenXsMin: screenXsMin,
  screenSmMin: screenSmMin,
  screenMdMin: screenMdMin,
  screenLgMin: screenLgMin,
  screenXsMax: screenSmMin - 1,
  screenSmMax: screenMdMin - 1,
  screenMdMax: screenLgMin - 1,
  screenLgWidth: screenLgWidth,
  xsGridMargin: 10,
  smGridMargin: 20,
  mdGridMargin: 30,
  lgGridMargin: lgGridMargin,
  backgroundColor: '#eeeeee',
  fontFamily: 'Source Sans Pro, sans-serif',
  fontWeight: '300',
  linkColor: '#000000',
  h2FontSize: '34px',
  h3FontSize: '28px',
  h4FontSize: '25.6px',
  h5FontSize: '22.2px',
  h6FontSize: '19.2px',
  headerFontColor: '#000000',
  smallerHeaderFontColor: '#2b2b2b',
  primaryColor: '#042559',
}
