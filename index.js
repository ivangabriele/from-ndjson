const DEFAULT_OPTIONS = {
  isStrict: false,
}

function fromNdjson(ndjsonString, options = {}) {
  const { isStrict } = {
    ...DEFAULT_OPTIONS,
    ...options,
  }

  return ndjsonString
    .trim()
    .split(/\n/)
    .map(ndjsonStringRow => ndjsonStringRow.trim())
    .reduce((prev, ndjsonStringRow, index) => {
      try {
        return [...prev, JSON.parse(ndjsonStringRow)]
      } catch (err) {
        if (isStrict) {
          throw new Error(`[from-ndjson] Could not parse row at line ${index + 1}: ${ndjsonStringRow.slice(0, 50)}...`)
        }

        return prev
      }
    }, [])
}

module.exports = fromNdjson
