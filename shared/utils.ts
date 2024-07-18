export function toKebabCase(str: string) {
  return str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    (match, p1) => (p1 ? '-' : '') + match.toLowerCase(),
  );
}

export function kebabToCamelCase(str: string) {
  str = str.replaceAll('_', '-');
  return str.replace(/-./g, (g) => g[1].toUpperCase());
}

export function kebakToPascalCase(str: string) {
  str = str.replaceAll('_', '-');
  return str.charAt(0).toUpperCase() + kebabToCamelCase(str).slice(1);
}
