import RequestPromise from 'request-promise-native';

const defaultOptions = {
  resolveWithFullResponse: true,
  json: true,
};

class HttpService {
  create(baseUrl) {
    return new RequestWrapper(baseUrl);
  }
};

async function startRequest(opts) {
  try {
    const response = await RequestPromise(opts);
    return response;
  } catch (err) {
    throw err;
  }
}

class RequestWrapper {

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  get(resource, opts = {}) {
    const method = 'get';
    const uri = this.baseUrl + resource;
    const options = Object.assign({}, defaultOptions, opts, { uri, method });
    return startRequest(options);
  }

  post(resource, body = {}, opts = {}) {
    const method = 'post';
    const uri = this.baseUrl + resource;
    const options = Object.assign({}, defaultOptions, opts, { body, uri, method });
    return startRequest(options);
  }

  put(resource, body = {}, opts = {}) {
    const method = 'put';
    const uri = this.baseUrl + resource;
    const options = Object.assign({}, defaultOptions, opts, { body, uri, method });
    return startRequest(options);
  }

  delete(resource, body = {}, opts = {}) {
    const method = 'delete';
    const uri = this.baseUrl + resource;
    const options = Object.assign({}, defaultOptions, opts, { body, uri, method });
    return startRequest(options);
  }

}

module.exports = new HttpService();