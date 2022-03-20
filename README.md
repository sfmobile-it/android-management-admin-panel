This project is made with [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction

Android Management Api let you to apply kiosk mode to any Android device, but it misses for an user interface to manage `enterprises`, `devices` and `policies`.

These data can be read from google apis, but it is very difficult to manage multiple devices from console interface.

So I decided to write this simple backoffice admin, developed with Next.js.

## Getting Started

1) Create a service account (skip this if you have one): https://developers.google.com/android/management/service-account
2) Clone the repository
3) Copy your service account json file to `config/googleServiceAccount.json`
4) Launch `npm install`
5) Start the server!


```bash
npm run dev
# or
yarn dev
```

