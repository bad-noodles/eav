"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
test('Resolving promise', () => __awaiter(void 0, void 0, void 0, function* () {
    const [v, err] = yield (0, _1.eav)(() => Promise.resolve("value"));
    expect(v).toBe("value");
    expect(err).toBe(null);
}));
test('Failing promise', () => __awaiter(void 0, void 0, void 0, function* () {
    const [v, err] = yield (0, _1.eav)(() => Promise.reject("Oops"));
    expect(v).toBe(null);
    expect(err).toBe("Oops");
}));
test('Non-async function', () => __awaiter(void 0, void 0, void 0, function* () {
    const [v, err] = yield (0, _1.eav)(() => "value");
    expect(v).toBe("value");
    expect(err).toBe(null);
}));
test('Function that throws an error', () => __awaiter(void 0, void 0, void 0, function* () {
    const [v, err] = yield (0, _1.eav)(() => { throw new Error("Oops"); });
    expect(v).toBe(null);
    expect(err).toBeInstanceOf(Error);
    expect(err === null || err === void 0 ? void 0 : err.message).toBe("Oops");
}));
test('Function that throws a non-error', () => __awaiter(void 0, void 0, void 0, function* () {
    const [v, err] = yield (0, _1.eav)(() => { throw "Oops"; });
    expect(v).toBe(null);
    expect(err).toBe("Oops");
}));
