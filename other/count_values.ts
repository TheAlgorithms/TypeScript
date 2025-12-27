export const countValues = <T>(it: Iterable<T>) => {
  const counts: Map<T, bigint> = new Map()
  for (const x of it) {
    counts.set(x, (counts.get(x) ?? 0n) + 1n)
  }
  return counts
}

export const countValuesBounded = <T>(a: readonly T[]) =>
  a.reduce(
    (counts, x) => counts.set(x, (counts.get(x) ?? 0) + 1),
    new Map<T, number>()
  )
