import { AxiosResponse } from 'axios';
export const apiErrorCheck = (
  res: AxiosResponse<any, any> | undefined
): object | unknown => {
  if (res && (res.status + '').slice(0, 2) === '40' && 'reason' in res.data) {
    // на будущее надо расширить область проверки пока в виде заглушки
    return { reason: res.data.reason };
  }
};
