import { AxiosResponse } from 'axios';

export interface IApiErrorReason {
  reason: string;
}

export const apiErrorCheck = (
  res: AxiosResponse<any, any> | undefined
): IApiErrorReason | unknown => {
  if (res && res.status.toString().startsWith('40') && 'reason' in res.data) {
    // на будущее надо расширить область проверки пока в виде заглушки
    return { reason: res.data.reason };
  }
};
