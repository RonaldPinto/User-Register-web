import { httpStatus } from '../Common/Service/httpClient';
import appconfig from './appConfig';

export default () => {
  return httpStatus(appconfig.configuration.urlBffStatus, 'get', {})
    .then(response => response.data)
    .catch(() => ({
      status:"disabled"
    }))
}
