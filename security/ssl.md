# Intro Notes

Entities:
- Keys
- Certificate Signing Requests (CSRs)
- X.509 Certificates

Encoding Schemes: PEM (Base64 ASCII), DER (binary)
- PEM (Privacy Enhanced Mail) => .crt, .pem, .cer, .key, .ca-bundle
- DER (Distinguished Encoding Rules) => .der, .cer

Common Container Formats like PKCS#12 or PKCS#7

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

## View Contents / Convert Format
```sh
# View
openssl x509 -in certificate.pem               -text -noout                      # view a pem
openssl x509 -inform der  -in certificate.der  -text -noout -out certificate.txt # view a der (write to file)
# Convert
openssl x509 -inform der  -in certificate.der  -out certificate.pem # convert der to pem
openssl x509 -outform der -in certificate.pem  -out certificate.der # convert pem to der
```

## Verify if a Private Key matches the Certificate, by comparing the 'modulus'.
https://www.ibm.com/support/pages/how-verify-if-private-key-matches-certificate

```sh
openssl x509 -in certificate.crt -modulus -noout | openssl md5
openssl rsa  -in private.key     -modulus -noout | openssl md5
```

## Generate a Key Pair
https://developers.yubico.com/PIV/Guides/Generating_keys_using_OpenSSL.html
```sh
# RSA
openssl genrsa -out privatekey.pem 2048
openssl rsa -in privatekey.pem -pubout -out publickey.pem
# EC
openssl ecparam -genkey -name prime256v1 -noout -out eckey.pem
openssl ec -in privatekey.pem -pubout -out publickey.pem
```
