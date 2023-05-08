**nslookup**

```sh
nslookup google.com
nslookup -type=MX google.com

nslookup 8.8.8.8
```

**dig**

```sh
dig google.com
dig google.com mx

dig -x 8.8.8.8
```

**host**

```sh
host google.com # all
host -t mx google.com

host 8.8.8.8
host -C google.com # SOA
```
