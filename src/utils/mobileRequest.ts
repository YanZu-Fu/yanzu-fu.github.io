// import { useUserStore } from '@/store/modules/user';
import Axios from 'axios';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class Http {
  constructor() {
    // 设置拦截器
    this.setInterceptor(Http.axiosInstance);
  }
  // 当前Axios实例对象
  private static axiosInstance: AxiosInstance = Axios.create({
    timeout: 50000, // 超时
    // baseURL: gvUtil.baseUrl,
  });

  // 自己的拦截器（只有iframe接入时会用）
  //   console.log('token:', localStorage.getItem('lowcode:token'));

  private setInterceptor(axiosInstance: AxiosInstance): void {
    axiosInstance.interceptors.request.use(
      (config: AxiosRequestConfig): any => {
        // const { token } = useUserStore();
        const token = sessionStorage.getItem('lowcode:token');
        console.log('获取token=======》', token);
        // const gitToken = JSON.parse(token);
        if (token) {
          config.headers = {
            ...config.headers,
            Token: eval(token),
            // Token:'66zmpmydowlc',
          };
        }
        return config;
      },
      error => Promise.reject(error)
    );
    // axiosInstance.interceptors.response.use(
    //   (res: AxiosResponse) => {
        // let isInner = useUserStore().from == 'lzos';

        // if (res.headers['content-type'].includes('application/octet-stream')) {
        //   return res;
        // }
        // if (res.data.mfail !== '0') {
        //   if (isInner) {
        //     gvUtil.postMsg({
        //       type: 'gvUtil.error',
        //       data: res.data.msg,
        //     });
        //   } else {
        //     gvUtil.error(res.data.msg);
        //   }
        //   return Promise.reject(res.data);
        // }
        // return res.data;
      // },
      // error => {
      //   let isInner = useUserStore().from == 'lzos';
      //   if (error?.response?.status == 401) {
      //     if (isInner) {
      //       gvUtil.postMsg({
      //         type: 'gvUtil.toLogin',
      //       });
      //     } else {
      //       gvUtil.error(error?.response?.data?.msg);
      //     }
      //     return error;
      //   }
      //   if (isInner) {
      //     gvUtil.postMsg({
      //       type: 'gvUtil.error',
      //       data: error?.response?.data?.msg,
      //     });
      //   } else {
      //     gvUtil.error(error?.response?.data?.msg);
      //   }
      //   return Promise.reject(error);
    //   }

    // );
  }

  public request<D, R>(config: AxiosRequestConfig<D>): Promise<R> {
    return new Promise<R>((resolve, reject) => {
      Http.axiosInstance
        .request<D>(config)
        .then(res => {
          resolve(res as R);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  public post<D, R>(url: string, data: D, shade?: boolean): Promise<R> {
    return this.request<D, R>({
      method: 'post',
      url,
      data,
      // shade,
    });
  }

  public get<D, R>(url: string, params: D, shade?: boolean): Promise<R> {
    return this.request<D, R>({
      method: 'get',
      url,
      params,
      // shade,
    });
  }
}

// export const download = async ({ url, method, data, params, name }) => {
//   const myAxios = Axios.create({
//     baseURL: gvUtil.baseUrl,
//   });
//   myAxios.interceptors.request.use(
//     (config: AxiosRequestConfig): any => {
//       const { token, tenantId, userId } = useUserStore();
//       if (token) {
//         config.headers = {
//           ...config.headers,
//           token,
//           ['user-id']: userId,
//           ['tenant-id']: tenantId,
//         };
//       }
//       return config;
//     },
//     error => Promise.reject(error)
//   );
//   try {
//     const res = await myAxios({
//       url,
//       method,
//       data,
//       params,
//       responseType: 'blob',
//     });
//     const fileName = name + '.xlsx';
//     const blod = new Blob([res.data]);
//     const link = document.createElement('a');
//     link.download = fileName;
//     link.style.display = 'none';
//     link.href = URL.createObjectURL(blod);
//     document.body.appendChild(link);
//     link.click();
//     URL.revokeObjectURL(link.href);
//     document.body.removeChild(link);
//     window?.postTileMsg({ eventType: 'closePop' });
//   } catch (e) {
//     console.log('导出失败');
//     console.error(e);
//   }
// };

export const http = new Http();
