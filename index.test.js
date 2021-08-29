const { promises: fs } = require('fs')
const path = require('path')

const fromNdjson = require('.')

describe('with a valid sample', () => {
  describe('with { isStrict: false }', () => {
    test('should return the expected result', async () => {
      const samplePath = path.join(__dirname, 'mocks/validSample.ndjson')
      const sample = await fs.readFile(samplePath, 'utf-8')

      const result = fromNdjson(sample)

      expect(result).toMatchObject([
        {
          some: 'thing',
        },
        {
          bar: false,
          foo: 17,
          quux: true,
        },
        {
          may: {
            include: 'nested',
            objects: ['and', 'arrays'],
          },
        },
      ])
    })
  })

  describe('with { isStrict: true }', () => {
    test('should throw the expected error', async () => {
      const samplePath = path.join(__dirname, 'mocks/validSample.ndjson')
      const sample = await fs.readFile(samplePath, 'utf-8')

      const result = fromNdjson(sample, { isStrict: true })

      expect(result).toMatchObject([
        {
          some: 'thing',
        },
        {
          bar: false,
          foo: 17,
          quux: true,
        },
        {
          may: {
            include: 'nested',
            objects: ['and', 'arrays'],
          },
        },
      ])
    })
  })
})

describe('with a partially invalid sample', () => {
  describe('with { isStrict: false }', () => {
    test('should return the expected result', async () => {
      const samplePath = path.join(__dirname, 'mocks/partiallyInvalidSample.ndjson')
      const sample = await fs.readFile(samplePath, 'utf-8')

      const result = fromNdjson(sample)

      expect(result).toMatchObject([
        {
          some: 'thing',
        },
        {
          may: {
            include: 'nested',
            objects: ['and', 'arrays'],
          },
        },
      ])
    })
  })

  describe('with { isStrict: true }', () => {
    test('should throw the expected error', async () => {
      const samplePath = path.join(__dirname, 'mocks/partiallyInvalidSample.ndjson')
      const sample = await fs.readFile(samplePath, 'utf-8')

      const call = () => fromNdjson(sample, { isStrict: true })

      expect(call).toThrow(
        '[from-ndjson] Could not parse row at line 2: { "foo": 17, "bar": INVALID, "quux": true }...',
      )
    })
  })
})

describe('with an invalid sample', () => {
  describe('with { isStrict: false }', () => {
    test('should return the expected result', async () => {
      const samplePath = path.join(__dirname, 'mocks/invalidSample.ndjson')
      const sample = await fs.readFile(samplePath, 'utf-8')

      const result = fromNdjson(sample)

      expect(result).toMatchObject([])
    })
  })

  describe('with { isStrict: true }', () => {
    test('should throw the expected error', async () => {
      const samplePath = path.join(__dirname, 'mocks/invalidSample.ndjson')
      const sample = await fs.readFile(samplePath, 'utf-8')

      const call = () => fromNdjson(sample, { isStrict: true })

      expect(call).toThrow('[from-ndjson] Could not parse row at line 1: { "some": INVALID }...')
    })
  })
})

describe('with an invalid sample', () => {
  describe('with { isStrict: false }', () => {
    test('should return the expected result', async () => {
      const samplePath = path.join(__dirname, 'mocks/invalidSample.ndjson')
      const sample = await fs.readFile(samplePath, 'utf-8')

      const result = fromNdjson(sample)

      expect(result).toMatchObject([])
    })
  })

  describe('with { isStrict: true }', () => {
    test('should throw the expected error', async () => {
      const samplePath = path.join(__dirname, 'mocks/invalidSample.ndjson')
      const sample = await fs.readFile(samplePath, 'utf-8')

      const call = () => fromNdjson(sample, { isStrict: true })

      expect(call).toThrow('[from-ndjson] Could not parse row at line 1: { "some": INVALID }...')
    })
  })
})
