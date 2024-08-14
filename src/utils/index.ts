import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

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

/**
 * Formats a date string to a human-readable format.
 * @param date
 * @returns A formatted date string.
 */
export function utilFormatDate(date: string): string {
  return format(new Date(date), "MMM dd, yyyy h:mm a");
}
