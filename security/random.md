## Generate random chars

OpenSSL
```sh
openssl rand -hex 32
```
```sh
openssl rand -base64 48 | sed 's/\+/-/g' | sed 's/\//_/g' | sed 's/=//g'
```

NodeJS Crypto
```js
crypto.randomBytes(48).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
```

_Note: base64 48 bytes / hex 32 bytes -> gives 64 chars length_
