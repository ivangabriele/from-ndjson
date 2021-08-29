export = fromNdjson;

declare function fromNdjson(ndjsonString: string, options?: FromNdjson.Options): JSON;

declare namespace FromNdjson {
  export type Options = {
    isStrict?: boolean;
  }
}
