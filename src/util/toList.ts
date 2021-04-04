export function toList<T>(input: Record<string, T>) {
  return Object.keys(input).map((id) => input[id]);
}
