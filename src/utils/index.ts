import { v4 as uuidv4 } from "uuid";

/**
 * Generates a random unique ID using UUID v4.
 * @returns A unique ID string.
 */
export function utilGenerateUUID(): string {
  return uuidv4();
}

/**
 * Generates a date-time string for the current date and time.
 * @returns A unique date-time string.
 */
export function utilGenerateDateTime(): string {
  return new Date().toISOString();
}
