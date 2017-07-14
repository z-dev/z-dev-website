/* eslint-disable*/
import _ from 'lodash'
import productionConfig from './production'
import developmentConfig from './development'
import defaults from './defaults'

const environment = process.env.CONFIG_ENV

const getEnvironment = () => {
  switch (environment) {
    case 'production':
      return productionConfig
    case 'development':
      return developmentConfig
    default:
      return developmentConfig
  }
}

const config = _.merge({}, defaults, getEnvironment())

export default config
