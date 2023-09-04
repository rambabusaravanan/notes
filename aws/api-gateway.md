# Gateway Responses

### Response Type : x-amzn-errortype

UNAUTHORIZED
- UnauthorizedException -> when no Auth header exists

ACCESS_DENIED
- AccessDeniedException -> when Bearer <token> is invalid

MISSING_AUTHENTICATION_TOKEN
- MissingAuthenticationTokenException -> when route is invalid, no Auth header exists

DEFAULT_4XX
- IncompleteSignatureException -> when route is invalid, Bearer <token> is invalid
  - when route is invalid, api_gateway would anyway throw 403 (or 404 if configured) for options request, for which CORS preflight response did not succeed,
  so browser will always see cors error instead of real error

Reference:
- https://repost.aws/knowledge-center/api-gateway-troubleshoot-403-forbidden
- https://docs.aws.amazon.com/apigateway/latest/developerguide/supported-gateway-response-types.html
