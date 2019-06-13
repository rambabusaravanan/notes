| Features                       | S3| FB| Ne|
|--------------------------------|---|---|---|
| index and error document       | Y | Y | Y |
| meta: content-type, cache      | O?| P | P |
| cors: root level, object level | R?| P | P |
| url redirection                | Y | S | S+|
| url rewrite                    | - | S | S+|
| clean url                      | - | Y | Y |
| directory listing api          | Y | - | - |



```yml
Services: S3:Amazon S3, FB:Firebase, Ne:Netlify

Cors: R:Root, D:Dir, O:Object, P:Pattern
Redirect: S:Segments, S+:with Query Params
Rewrite: S:Segments, S+:Proxy 
```
