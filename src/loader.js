'use client';

export default function localLoader({ src }) {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${src}`;
}