import { get, post } from '@/services/base.service';
import { CustomerType } from '@/types/customer.type';

export const findAllCustomers = async () => {
  return get({ url: '/customers', params: {} });
};

export const createCustomers = async (body: CustomerType) => {
  return post({ url: '/customers', body })
}

export const findCustomerById = async (id: number) => {
  return get({ url: `/customers/${id}`, params: {} })
}
