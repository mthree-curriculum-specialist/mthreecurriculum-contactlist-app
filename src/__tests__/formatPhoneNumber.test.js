/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

test("formats phone 8 digit phone number with dashes", function () {
  //  ARRANGE
  let phoneNumber = "9192392";
  // ACT

  // ASSERT
  expect(formatPhoneNumber(phoneNumber)).toBe("919-2392");
});

test("formats phone 10 digit phone number with dashes", function () {
  //  ARRANGE
  let phoneNumber = "9192392342";
  // ACT

  // ASSERT
  expect(formatPhoneNumber(phoneNumber)).toBe("919-239-2342");
});
