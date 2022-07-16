import { getMonth } from "../index.js";

describe("test for getMonth function", () => {
    it("test succses", () => {
        expect(getMonth(3)).toBe('март');
   }),
    it("test failed", () => {
        expect(getMonth(13)).toBe('неизвестно')
    }),
    it("recevied undefined data", () => {
        const bigNumber = 78;
        const thisString = "Fall";
        expect(getMonth(bigNumber)).toBe('неизвестно');
        expect(getMonth(thisString)).toBe('неизвестно')
    })
});