// Keep examples runnable from source, but make the code users copy resolve from npm.
export function packageExample(source) {
  return source
    .replace(
      /import\s+(\w+)\s+from\s+["']\.\.\/\.\.\/lib\/components\/(Vw\w+)\.vue["'];?/g,
      (_, local, exported) =>
        `import { ${exported}${local === exported ? "" : ` as ${local}`} } from '@bagombeka/vuewind';`,
    )
    .replace(
      /import\s+(\w+)\s+from\s+["']\.\.\/\.\.\/lib\/Icon\.vue["'];?/g,
      (_, local) => `import { VwIcon as ${local} } from '@bagombeka/vuewind';`,
    );
}
