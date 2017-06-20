const screenXsMin = 480
const screenSmMin = 768
const screenMdMin = 992
const screenLgMin = 1200
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
  h5FontSize: '22.2px',
  headerFontColor: '#2b2b2b',
}
