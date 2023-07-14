Entities:
- Keys
- Certificate Signing Requests (CSRs)
- X.509 Certificates

Encoding Schemes: PEM (Base64 ASCII), DER (binary)
- PEM (Privacy Enhanced Mail) => .crt, .pem, .cer, .key, .ca-bundle
- DER (Distinguished Encoding Rules) => .der, .cer

Common Container Formats like PKCS#12 or PKCS#7

-----

Import Certificate
- PrivateKey => private.key (domain)
- CertificateBody => certificate.crt (domain)
- CertificateChain => issuer-ca.crt / issuer-ca-chain.crt
- CA Bundle => issuer-ca.crt + trusted-root.crt (Is this same as issuer-ca-chain.crt)

Firefox
- Cert.pem => CertificateBody
- Chain.pem => CertificateBody + CertificateChain

----

To view / convert contents 
```sh
openssl x509 -in certificate.pem               -text -noout # view a pem
openssl x509 -inform der  -in certificate.der  -text -noout # view a der

openssl x509 -inform der  -in certificate.der -out certificate.pem # convert der to pem
openssl x509 -outform der -in certificate.pem -out certificate.der # convert pem to der
```

To verify if a Private Key Matches a Certificate, compare the 'modulus'.
https://www.ibm.com/support/pages/how-verify-if-private-key-matches-certificate

```sh
openssl x509 -in certificate.crt -modulus -noout | openssl md5
openssl rsa  -in private.key     -modulus -noout | openssl md5
```
