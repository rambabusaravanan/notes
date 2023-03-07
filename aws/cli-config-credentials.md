.aws/credentials

```ini
[iam-account]
aws_access_key_id = xxx
aws_secret_access_key = xxx
```


.aws/config

```ini
[profile iam-account]
region = ap-southeast-1

[profile project-account]
region = ap-southeast-1
role_arn = arn:aws:iam::123456789000:role/FullAccess
source_profile = iam-account
mfa_serial = arn:aws:iam::123456789001:mfa/xxx
```

where
- 123456789000 is iam account id
- 123456789001 is project account id
