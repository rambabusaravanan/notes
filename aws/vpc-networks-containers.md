## Containers

### Service Discovery

When networkMode = `bridge` or `host`
- requires `containerName` and `containerPort`

When networkMode = `awsvpc`
- with `SRV DNS` record - requires (`containerName` and `containerPort`) or (`port`)
- with `A DNS` record - requires nothing ??

### Task Definition

When networkMode = `awsvpc`, the host ports and container ports in port mappings must match.
