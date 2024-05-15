'use server';

import {cookies} from 'next/headers';

export const setCookie = (acctkn: string, rfrshtkn: string) => {
    cookies().set('acctkn', acctkn)
    cookies().set('rfrshkn', rfrshtkn)
}

export const getCookie = () => {
    return cookies().get('acctkn');
}