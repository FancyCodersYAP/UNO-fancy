import { AxiosResponse } from 'axios';

export interface IApiErrorReason {
  reason: string;
}

export const apiErrorCheck = (
  res: AxiosResponse | undefined
): IApiErrorReason | undefined => {
  if (
    res &&
    res.status.toString().startsWith('40') &&
    typeof res.data === 'object' &&
    'reason' in res.data
  ) {
    // на будущее надо расширить область проверки пока в виде заглушки
    return { reason: res.data.reason };
  }
};
