# http-errs

HTTP errors ready to be thrown, possibly with a custom message.  

## Usage

Install:
```sh
yarn add http-errs
```

Use:
```js
import { HTTP_ERROR, HTTP500 } from 'http-errs';

try {
  throw new HTTP500('What a mess!'); // if no message if provided, default one is used
}
catch (error) {
  if (error instanceof HTTP_ERROR) {
    console.error(error.message);
  }
  else {
    console.log('Another type of error not handled');
  }
}
```

Errors exported:

|Status Code| Message                       |
|-----------|:------------------------------|
|400        | Bad Request                   |
|401        | Unauthorized                  |
|402        | PaymentRequired               |
|403        | Forbidden                     |
|404        | NotFound                      |
|405        | MethodNotAllowed              |
|406        | NotAcceptable                 |
|407        | ProxyAuthenticationRequired   |
|408        | RequestTimeout                |
|409        | Conflict                      |
|410        | Gone                          |
|411        | LengthRequired                |
|412        | PreconditionFailed            |
|413        | PayloadTooLarge               |
|414        | URITooLong                    |
|415        | UnsupportedMediaType          |
|416        | RangeNotSatisfiable           |
|417        | ExpectationFailed             |
|418        | ImATeapot                     |
|421        | MisdirectedRequest            |
|422        | UnprocessableEntity           |
|423        | Locked                        |
|424        | FailedDependency              |
|425        | TooEarly                      |
|426        | UpgradeRequired               |
|428        | PreconditionRequired          |
|429        | TooManyRequests               |
|431        | RequestHeaderFieldsTooLarge   |
|451        | UnavailableForLegalReasons    |
|500        | InternalServerError           |
|501        | NotImplemented                |
|502        | BadGateway                    |
|503        | ServiceUnavailable            |
|504        | GatewayTimeout                |
|505        | HTTPVersionNotSupported       |
|506        | VariantAlsoNegotiates         |
|507        | InsufficientStorage           |
|508        | LoopDetected                  |
|509        | BandwidthLimitExceeded        |
|510        | NotExtended                   |
|511        | NetworkAuthenticationRequired |
