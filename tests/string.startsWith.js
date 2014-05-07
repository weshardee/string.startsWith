/*globals beforeEach, describe, it, module, inject, expect */

describe('Polyfill : string.startsWith', function () {
    'use strict';

    it('should be correctly defined', function () {
        expect(String.prototype.startsWith).not.toBeDefined();
        expect('a'.startsWith()).toBe('a');
    });
});