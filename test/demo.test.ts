import { assert, describe, it } from 'vitest';

describe('test module one', () => {
    it('step one', () => {
        assert.equal(Math.sqrt(4), 2)
    })
    it('step two', () => {
        assert.equal(Math.max(6, 2), 6)
    })
    it('step two', () => {
        assert.equal(Math.min(6, 2), 2)
    })
})