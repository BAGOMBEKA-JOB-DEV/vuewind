const pattern =
  /(<!--[\s\S]*?-->|\/\/[^\n]*|'[^'\n]*'|"[^"\n]*"|`[^`]*`|<\/?[\w-]+|\b(?:import|from|const|let|export|default|async|await|return|true|false)\b)/g;

export function highlight(code) {
  return String(code)
    .split(pattern)
    .filter(Boolean)
    .map((text) => {
      let type = "";
      if (/^(<!--|\/\/)/.test(text)) type = "comment";
      else if (/^['"`]/.test(text)) type = "string";
      else if (/^</.test(text)) type = "tag";
      else if (
        /^(import|from|const|let|export|default|async|await|return|true|false)$/.test(
          text,
        )
      )
        type = "keyword";
      return { text, type };
    });
}
