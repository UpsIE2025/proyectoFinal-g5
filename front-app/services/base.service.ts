import RequestType from '@/types/request.type';
import { getParam } from '@/utils/local-storage';
import { Response } from 'next/dist/compiled/@edge-runtime/primitives/fetch';

// const host = 'http://localhost:8080/api/wedding-planner';
const host = 'https://wedding.mssalazarb.dev/api/wedding-planner';

const contentType: any = {
  json: 'application/json',
  blob: 'blob',
};

const buildHeaders = (type: string) => {
  let headers: any = {
    Accept: 'application/json',
  };

  if (contentType[type]) {
    headers = {
      ...headers,
      'Accept': type === 'blob' ? 'application/pdf' : 'application/json',
      'Content-Type': contentType[type],
    };
  } else {
    headers = {
      ...headers,
    };
  }

  const token: string | null = getParam('token');

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
};

const buildPayload = (type: string, body: any) => {
  if (type === 'json') {
    return JSON.stringify(body);
  }

  return body;
};

const validateResponse = async (response: Response) => {
  let data;
  const type = response.headers.get('Content-Type');
  if (type === 'application/pdf') {
    data = await response.blob()
  } else if (type === 'application/json') {
    data = await response.json();
  }

  if (!response.ok) {
    throw data;
  }

  return data;
};

export const get = async ({ url, params, type = 'json' }: RequestType) => {
  const queryParams = new URLSearchParams(params);

  const response = await fetch(`${host}${url}?${queryParams}`, {
    credentials: 'omit',
    method: 'GET',
    headers: buildHeaders(type),
  });

  return validateResponse(response);
};

export const post = async ({ url, body, type = 'json' }: RequestType) => {
  const response = await fetch(`${host}${url}`, {
    credentials: 'omit',
    method: 'POST',
    headers: buildHeaders(type),
    body: buildPayload(type, body),
  });

  return validateResponse(response);
};

export const put = async ({ url, body, type = 'json' }: RequestType) => {
  console.log('DATA', type);
  const response = await fetch(`${host}${url}`, {
    credentials: 'omit',
    method: 'PUT',
    headers: buildHeaders(type),
    body: buildPayload(type, body),
  });

  return validateResponse(response);
};

export const del = async ({ url, params, type = 'json' }: RequestType) => {
  const queryParams = new URLSearchParams(params);

  const response = await fetch(`${host}${url}?${queryParams}`, {
    credentials: 'omit',
    method: 'DELETE',
    headers: buildHeaders(type),
  });

  return validateResponse(response);
};
