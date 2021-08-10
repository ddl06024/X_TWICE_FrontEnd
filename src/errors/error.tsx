export class ImageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ImageError";
  }
}

export class HttpError extends Error {
  extensions?: Record<string, any>;

  constructor(message: string, extensions?: Record<string, any>) {
    super(message);
    this.name = "HttpError";
    this.extensions = extensions;
  }
}
