import { get, post } from '@/services/base.service';
import { ReceptionType } from '@/types/reception.type';

export const findAllReceptions = async () => {
  return get({ url: '/receptions', params: {} });
};

export const createReceptions = async (body: ReceptionType) => {
  return post({ url: '/receptions', body })
}
