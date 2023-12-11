const propertiesKey = 'PodFooterFront.properties'
const storedData = JSON.parse(sessionStorage.getItem('_c'))
const properties = (storedData && storedData[propertiesKey]) || {}

function getPropertyValue(propertyKey) {
  return process.env[propertyKey] || properties[propertyKey]
}

const env = {
  REACT_APP_CTX: getPropertyValue('PRODUCTION_DOMAIN_URL'),
}

export default env
