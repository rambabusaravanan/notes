# Intro Notes

Entities:
- Public Key
  - BEGIN PUBLIC KEY
- Private Key
  - BEGIN RSA PRIVATE KEY
  - BEGIN EC PRIVATE KEY
  - BEGIN ENCRYPTED PRIVATE KEY
- Certificate Signing Requests (CSRs)
  - BEGIN CERTIFICATE REQUEST
- X.509 Certificates
  - BEGIN CERTIFICATE

Encoding Schemes: PEM (Base64 ASCII), DER (binary)
- PEM (Privacy Enhanced Mail) => .crt, .pem, .cer, .key, .ca-bundle
- DER (Distinguished Encoding Rules) => .der, .cer

Common Container Formats like PKCS#12 or PKCS#7
- PKCS#12 format contains both the certificate and private key (.pfx or .p12)

-----

# Files Reference

Import Certificate
- PrivateKey => private.key (domain)
- CertificateBody => certificate.crt (domain)
- CertificateChain => issuer-ca.crt / issuer-ca-chain.crt
- CA Bundle => issuer-ca.crt + trusted-root.crt (Is this same as issuer-ca-chain.crt)

Firefox (downloaded)
- Cert.pem => CertificateBody
- Chain.pem => CertificateBody + CertificateChain

----

# CheatSheet

https://knowledge.digicert.com/general-information/openssl-quick-reference-guide

## View Contents / Convert Format
```sh
# View as Text
openssl req  -text             -in request.csr                          -noout # view a csr pem
openssl x509 -text             -in certificate.pem                      -noout # view a cert pem
openssl x509 -text -inform der -in certificate.der -out certificate.txt -noout # view a cert der & write to file

# Convert Format
openssl x509 -inform der  -in certificate.der  -out certificate.pem # convert der to pem
openssl x509 -outform der -in certificate.pem  -out certificate.der # convert pem to der
```

## Generate a Key Pair
https://developers.yubico.com/PIV/Guides/Generating_keys_using_OpenSSL.html
```sh
# RSA
openssl genrsa -out private.key 2048                                # Generate Private Key
openssl rsa -pubout -in private.key -out public.key                 # Extract Public Key from Private Key
# EC
openssl ecparam -genkey -name prime256v1 -out private.key -noout    # Generate Private Key
openssl ec  -pubout -in private.key -out public.key                 # Extract Public Key from Private Key
```

## Generate a CSR [+ Private Key]
```sh
# Generate CSR using Private Key
openssl req -new -key private.key                            -out domain.csr

# Generate Both CSR & Private Key
openssl req -new -newkey rsa:2048 -nodes -keyout private.key -out domain.csr
```

## Generate a Self Signed Certificate + Private Key
https://www.ibm.com/docs/en/rpa/23.0?topic=keys-generating-self-signed-certificates
You must add a password to protect the key file.
```sh
openssl req -x509 -sha256 -newkey rsa:2048 -keyout private.key -out certificate.crt -days 365
```

## Extract Public Key (from Cert/PubKey)
```sh
openssl req  -pubkey -in request.csr -out public.key -noout       # Extract Public Key from CSR
openssl x509 -pubkey -in certificate.crt -out public.key -noout   # Extract Public Key from Certificate
openssl pkey -pubout -in private.key -out public.key              # Extract Public Key from Private Key

openssl rsa  -pubout -in private.key -out public.key              # Extract Public Key from RSA Private Key
openssl ec   -pubout -in private.key -out public.key              # Extract Public Key from EC Private Key
```
NOTE: 
- `rsa`, `ec`, `pkey` are cmd for keys, so '-pubout'; `x509`, `req` has to specify '-pubkey'
- `x509`, `req` cmd are for certificate & request, and prints the req. so '-noout'


## Verify if a Private Key matches the Certificate, by comparing the 'modulus'.
https://www.ibm.com/support/pages/how-verify-if-private-key-matches-certificate

```sh
openssl x509 -modulus -in certificate.crt -noout | openssl md5
openssl rsa  -modulus -in private.key     -noout | openssl md5
```
