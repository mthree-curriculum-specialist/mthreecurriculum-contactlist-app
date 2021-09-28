/**
 * @jest-environment jsdom
 */
import { expect, test } from "@jest/globals";
import "@testing-library/jest-dom";
import useFetch from "../hooks/useFetch";
import { renderHook } from "@testing-library/react-hooks";
import { server } from "../utils/mocks/server";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Reteives contact details", async function () {
  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch("http://contactlist.us-east-1.elasticbeanstalk.com/contact/1")
  );

  await waitForNextUpdate();
  const [data, error] = result.current;

  expect(error).toBe(null);
  expect(data.firstName).toEqual("Betty");
});
