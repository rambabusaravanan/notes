# Gateway Responses

- UnauthorizedException -> when no Auth header exists
- AccessDeniedException -> when Bearer <token> is invalid
- MissingAuthenticationTokenException -> when route is invalid, no Auth header exists
- IncompleteSignatureException -> when route is invalid, Bearer <token> is invalid
