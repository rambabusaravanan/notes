### Encryption/Decryption

| Operation | Key         |
| --------- | ----------- |
| Encrypt   | Public Key  |
| Decrypt   | Private Key |

### Sign/Verify Signature
Creating and verifying signatures uses the public/private keypair in an operation different from encryption and decryption.

| Operation | Key         |
| --------- | ----------- |
| Sign      | Private Key |
| Verify    | Public Key  |

_Reference: https://www.gnupg.org/gph/en/manual/x135.html_

### MAC

- HMAC - Hash-based Message Authentication Codes. Eg, SHA
- CMAC - Cipher-based Message Authentication Codes. Eg, AES

