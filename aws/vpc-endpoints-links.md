# VPC Endpoints

- **Interface Endpoint** - traffic for `vpce` resolved using DNS to an ENI, to send traffic to NLB (AWS PrivateLink)
- **GatewayLoadBalancer Endpoint** - use Route Table, to send traffic to GatewayLoadBalancer (AWS PrivateLink)
- **Gateway Endpoint** - use Route Table, to send traffic to Amazon S3 or DynamoDB using private IP addresses (No AWS PrivateLink)

Reference: https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html#concepts-vpc-endpoints

## API Gateway - Endpoint

Private Endpoint for
- REST APIs use `Interface Endpoint`, which is an ENI in your VPC

Reference: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-private-apis.html


## API Gateway - Integration (VPC Links)

VPC links for
- REST APIs rely on AWS PrivateLink
- HTTP APIs use VPC-to-VPC NAT, which provides a higher level of abstraction.

Reference: https://aws.amazon.com/blogs/compute/understanding-vpc-links-in-amazon-api-gateway-private-integrations/
