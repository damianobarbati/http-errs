export default class HTTP_ERROR extends Error {
  name;
  message;
  http_code;
  stack;

  constructor(message, http_code) {
    super(message);
    Error.captureStackTrace(this, HTTP_ERROR);
    this.name = this.constructor.name.replace('_Error', String(http_code));
    this.http_code = http_code;
    this.message = message;
  }
}

export class HTTP400 extends HTTP_ERROR {
  constructor(message = 'Bad Request') {
    super(message, 400);
  }
}

export class HTTP401 extends HTTP_ERROR {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

export class HTTP402 extends HTTP_ERROR {
  constructor(message = 'Payment Required') {
    super(message, 402);
  }
}

export class HTTP403 extends HTTP_ERROR {
  constructor(message = 'Forbidden') {
    super(message, 403);
  }
}

export class HTTP404 extends HTTP_ERROR {
  constructor(message = 'Not Found') {
    super(message, 404);
  }
}

export class HTTP405 extends HTTP_ERROR {
  constructor(message = 'Method Not Allowed') {
    super(message, 405);
  }
}

export class HTTP406 extends HTTP_ERROR {
  constructor(message = 'Not Acceptable') {
    super(message, 406);
  }
}

export class HTTP407 extends HTTP_ERROR {
  constructor(message = 'Proxy Authentication Required') {
    super(message, 407);
  }
}

export class HTTP408 extends HTTP_ERROR {
  constructor(message = 'Request Timeout') {
    super(message, 408);
  }
}

export class HTTP409 extends HTTP_ERROR {
  constructor(message = 'Conflict') {
    super(message, 409);
  }
}

export class HTTP410 extends HTTP_ERROR {
  constructor(message = 'Gone') {
    super(message, 410);
  }
}

export class HTTP411 extends HTTP_ERROR {
  constructor(message = 'Length Required') {
    super(message, 411);
  }
}

export class HTTP412 extends HTTP_ERROR {
  constructor(message = 'Precondition Failed') {
    super(message, 412);
  }
}

export class HTTP413 extends HTTP_ERROR {
  constructor(message = 'Payload Too Large') {
    super(message, 413);
  }
}

export class HTTP414 extends HTTP_ERROR {
  constructor(message = 'URI Too Long') {
    super(message, 414);
  }
}

export class HTTP415 extends HTTP_ERROR {
  constructor(message = 'Unsupported Media Type') {
    super(message, 415);
  }
}

export class HTTP416 extends HTTP_ERROR {
  constructor(message = 'Range Not Satisfiable') {
    super(message, 416);
  }
}

export class HTTP417 extends HTTP_ERROR {
  constructor(message = 'Expectation Failed') {
    super(message, 417);
  }
}

export class HTTP418 extends HTTP_ERROR {
  constructor(message = "I'm a teapot") {
    super(message, 418);
  }
}

export class HTTP421 extends HTTP_ERROR {
  constructor(message = 'Misdirected Request') {
    super(message, 421);
  }
}

export class HTTP422 extends HTTP_ERROR {
  constructor(message = 'Unprocessable Entity') {
    super(message, 422);
  }
}

export class HTTP423 extends HTTP_ERROR {
  constructor(message = 'Locked') {
    super(message, 423);
  }
}

export class HTTP424 extends HTTP_ERROR {
  constructor(message = 'Failed Dependency') {
    super(message, 424);
  }
}

export class HTTP425 extends HTTP_ERROR {
  constructor(message = 'Too Early') {
    super(message, 425);
  }
}

export class HTTP426 extends HTTP_ERROR {
  constructor(message = 'Upgrade Required') {
    super(message, 426);
  }
}

export class HTTP428 extends HTTP_ERROR {
  constructor(message = 'Precondition Required') {
    super(message, 428);
  }
}

export class HTTP429 extends HTTP_ERROR {
  constructor(message = 'Too Many Requests') {
    super(message, 429);
  }
}

export class HTTP431 extends HTTP_ERROR {
  constructor(message = 'Request Header Fields Too Large') {
    super(message, 431);
  }
}

export class HTTP451 extends HTTP_ERROR {
  constructor(message = 'Unavailable For Legal Reasons') {
    super(message, 451);
  }
}

export class HTTP500 extends HTTP_ERROR {
  constructor(message = 'Internal Server Error') {
    super(message, 500);
  }
}

export class HTTP501 extends HTTP_ERROR {
  constructor(message = 'Not Implemented') {
    super(message, 501);
  }
}

export class HTTP502 extends HTTP_ERROR {
  constructor(message = 'Bad Gateway') {
    super(message, 502);
  }
}

export class HTTP503 extends HTTP_ERROR {
  constructor(message = 'Service Unavailable') {
    super(message, 503);
  }
}

export class HTTP504 extends HTTP_ERROR {
  constructor(message = 'Gateway Timeout') {
    super(message, 504);
  }
}

export class HTTP505 extends HTTP_ERROR {
  constructor(message = 'HTTP Version Not Supported') {
    super(message, 505);
  }
}

export class HTTP506 extends HTTP_ERROR {
  constructor(message = 'Variant Also Negotiates') {
    super(message, 506);
  }
}

export class HTTP507 extends HTTP_ERROR {
  constructor(message = 'Insufficient Storage') {
    super(message, 507);
  }
}

export class HTTP508 extends HTTP_ERROR {
  constructor(message = 'Loop Detected') {
    super(message, 508);
  }
}

export class HTTP509 extends HTTP_ERROR {
  constructor(message = 'Bandwidth Limit Exceeded') {
    super(message, 509);
  }
}

export class HTTP510 extends HTTP_ERROR {
  constructor(message = 'Not Extended') {
    super(message, 510);
  }
}

export class HTTP511 extends HTTP_ERROR {
  constructor(message = 'Network Authentication Required') {
    super(message, 511);
  }
}
