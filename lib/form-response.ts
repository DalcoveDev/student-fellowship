function firstMessage(value: unknown): string | null {
  if (typeof value === "string") {
    return value.trim() ? value : null;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const message = firstMessage(item);
      if (message) return message;
    }
  }

  if (value && typeof value === "object") {
    for (const item of Object.values(value)) {
      const message = firstMessage(item);
      if (message) return message;
    }
  }

  return null;
}

/**
 * Turns a failed Django REST Framework response into the most useful message:
 * a general detail message, otherwise the first field error.
 */
export async function readFormError(response: Response) {
  const payload = (await response.json().catch(() => null)) as
    | Record<string, unknown>
    | null;

  if (payload && typeof payload === "object") {
    const detail = firstMessage(payload.detail);
    if (detail) return detail;

    for (const value of Object.values(payload)) {
      const message = firstMessage(value);
      if (message) return message;
    }
  }

  return "Something went wrong. Please try again.";
}
