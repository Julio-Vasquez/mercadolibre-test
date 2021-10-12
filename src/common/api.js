import { message } from 'antd'
import { BASE_URL_API } from './config'

const errorJson = {
  400: 'No se pudo interpretar la solicitud dada',
  401: 'No Autorizado',
  404: 'El servidor no pudo encontrar el contenido solicitado',
}

export const GET = async ({ url }) => {
  return fetch(`${BASE_URL_API}/${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
  })
    .then(async res => {
      if (res.statusText !== 'OK') message.error(errorJson[res.status])
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}

export const POST = async ({ url, body = {}, header = {} }) => {
  return fetch(`${BASE_URL_API}/${url}`, {
    method: 'POST',
    headers: header
      ? header
      : {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': 'https://javascript.info',
        },
    body: JSON.stringify(body),
  })
    .then(async res => {
      if (res.statusText !== 'OK') message.error(errorJson[res.status])
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}
export const PUT = async ({ url, body = {}, header = {} }) => {
  return fetch(`${BASE_URL_API}/${url}`, {
    method: 'PUT',
    headers: header
      ? header
      : {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
    body: JSON.stringify(body),
  })
    .then(async res => {
      if (res.statusText !== 'OK') message.error(errorJson[res.status])
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}
export const DELETE = async ({ url, body = {}, header = {} }) => {
  return fetch(`${BASE_URL_API}/${url}`, {
    method: 'DELETE',
    headers: header
      ? header
      : {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
    body: body ? JSON.stringify(body) : '',
  })
    .then(async res => {
      if (res.statusText !== 'OK') message.error(errorJson[res.status])
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}
