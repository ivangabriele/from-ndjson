export = fromNdjson;

declare function fromNdjson<T>(ndjsonString: string, options?: FromNdjson.Options): T;

declare namespace FromNdjson {
  export type Options = {
    isStrict?: boolean;
  }
}
