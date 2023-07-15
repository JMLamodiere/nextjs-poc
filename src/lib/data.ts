import 'server-only';

export async function getData(): Promise<number> {
  return Promise.resolve(42);
}
