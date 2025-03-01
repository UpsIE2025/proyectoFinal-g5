import { get, post } from '@/services/base.service';
import { EventType } from '@/types/event.type';

export const findAllEvents = async () => {
  return get({ url: '/events', params: {} });
};

export const createEvents = async (body: EventType) => {
  return post({ url: '/events', body });
};
