// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('Check if 111-111-1111 is a phone number', () => {
  expect(functions.isPhoneNumber('111-111-1111')).toBe(true);
});

test('Check if (858) 534-2230 is a phone number', () => {
  expect(functions.isPhoneNumber('(858) 534-2230')).toBe(true);
});

test('Check if 3.14159253 is a phone number', () => {
  expect(functions.isPhoneNumber('3.14159253')).toBe(false);
});

test('Check if pokemon is a phone number', () => {
  expect(functions.isPhoneNumber('pokemon')).toBe(false);
});

test('Check if whattheheck@gmail.com is a valid email', () => {
  expect(functions.isEmail('whattheheck@gmail.com')).toBe(true);
});

test('Check if tests@yahoo.com is a valid email', () => {
  expect(functions.isEmail('tests@yahoo.com')).toBe(true);
});

test('Check if 1984 by George Orwell is a valid email', () => {
  expect(functions.isEmail('1984 by George Orwell')).toBe(false);
});

test('Check if xyz(at)gmail.com is a valid email', () => {
  expect(functions.isStrongPassword('xyz(at)gmail.com')).toBe(false);
});

test('Check if abc12345_ is a strong password', () => {
  expect(functions.isStrongPassword('abcd12345_')).toBe(true);
});

test('Check if CSE110 is a strong password', () => {
  expect(functions.isStrongPassword('CSE110')).toBe(true);
});

test('Check if hungry!? is a strong password', () => {
  expect(functions.isStrongPassword('hungry!?')).toBe(false);
});

test('Check if 7upOrSprite is a strong password', () => {
  expect(functions.isStrongPassword('7upOrSprite')).toBe(false);
});

test('Check if 14/11/2021 is a valid date', () => {
  expect(functions.isDate('11/14/2021')).toBe(true);
});

test('Check if 01/01/2022 is a valid date', () => {
  expect(functions.isDate('01/01/2022')).toBe(true);
});

test('Check if 1776/07/04 is a valid date', () => {
  expect(functions.isDate('1776/07/04')).toBe(false);
});

test('Check if date is a valid date', () => {
  expect(functions.isDate('date')).toBe(false);
});

test('Check if FFFFFF is a hex color', () => {
  expect(functions.isHexColor('FFFFFF')).toBe(true);
});

test('Check if 000000 is a hex color', () => {
  expect(functions.isHexColor('000000')).toBe(true);
});

test('Check if xdloluwu is a hex color', () => {
  expect(functions.isHexColor('xdloluwu')).toBe(false);
});

test('Check if CI/CDs is a hex color', () => {
  expect(functions.isHexColor('CI/CDs')).toBe(false);
});

// TODO - Part 2