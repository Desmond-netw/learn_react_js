import {expect, test} from 'vitest';
import {Sum} from "@/app/page";

test('Add 4 + 2', () => {
    expect(Sum(2, 4)).toBe(6);
})