import { request } from 'funsee-request';

const commonService = (path, data) => new Promise((resolve, reject) => {
  request.post(path, data)
    .then((res) => {
      if (res.success) resolve(res.data);
      else reject(res.msg);
    })
    .catch((e) => {
      reject(e);
    })
});

export default commonService;
