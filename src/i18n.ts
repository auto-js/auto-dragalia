const locale: Record<
  string,
  string
> = require(`@/locale/${TARGET_LOCALE}.json`);

function getTemplate(key: string): string {
  if (key in locale) {
    return locale[key];
  }
  return key;
}

function formatTemplate(
  template: string,
  values: Record<string, unknown> = {}
): string {
  let ret = template;
  for (const k in values) {
    const v = values[k] as unknown;
    ret = ret.replace(new RegExp(`\\$\{${k}\}`, 'g'), String(v));
  }
  return ret;
}

export function tr(key: string, values?: Record<string, unknown>): string {
  return formatTemplate(getTemplate(key), values);
}
