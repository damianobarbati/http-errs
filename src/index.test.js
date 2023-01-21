import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { HTTP404 } from './index.js';

describe('HTTP Error', () => {
  it('should have http_code and default message', () => {
    try {
      throw new HTTP404();
    } catch (error) {
      console.log(error);
      const http_code = error.http_code;
      const message = error.message;
      assert.deepEqual(http_code, 404);
      assert.deepEqual(message, 'Not Found');
    }
  });

  it('should have http_code and custom message', () => {
    try {
      throw new HTTP404('Doh! Where is it?');
    } catch (error) {
      const http_code = error.http_code;
      const message = error.message;
      assert.deepEqual(http_code, 404);
      assert.deepEqual(message, 'Doh! Where is it?');
    }
  });
});
