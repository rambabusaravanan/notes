| Features                       | S3| FB| Ne| CF| Ve|
|--------------------------------|---|---|---|---|---|
| index and error document       | Y | Y | Y |   |   |
| meta: content-type, cache      | O?| P | P |   |   |
| cors: root level, object level | R?| P | P |   |   |
| url redirection                | Y | S | S+|   |   |
| url rewrite                    | - | S | S+|   |   |
| clean url                      | - | Y | Y |   |   |
| directory listing api          | Y | - | - |   |   |
| wildcard custom domain         | - | - |   | - |   |
| one click rollback             | - | Y |   | Y | Y |
| git auto deploy                |   |   | Y | Y |   |
| preview channels               |   | Y |   | Y |   |

```yml
Services: S3:Amazon S3, FB:Firebase, Ne:Netlify, CF: Cloudflare Pages, Ve: Vercel

Cors: R:Root, D:Dir, O:Object, P:Pattern
Redirect: S:Segments, S+:with Query Params
Rewrite: S:Segments, S+:Proxy 
```
