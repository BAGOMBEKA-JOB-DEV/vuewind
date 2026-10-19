import test from "node:test";
import assert from "node:assert/strict";
import { packageExample } from "../src/docs/utils/package-example.js";

test("copied examples use public package imports, including icon aliases", () => {
  const input = `import VwButton from '../../lib/components/VwButton.vue';\nimport Choice from "../../lib/components/VwSelect.vue";\nimport Icon from '../../lib/Icon.vue';\nimport {ref} from 'vue';`;
  const output = packageExample(input);
  assert.match(output, /import \{ VwButton \} from '@bagombeka\/vuewind'/);
  assert.match(
    output,
    /import \{ VwSelect as Choice \} from '@bagombeka\/vuewind'/,
  );
  assert.match(
    output,
    /import \{ VwIcon as Icon \} from '@bagombeka\/vuewind'/,
  );
  assert.match(output, /import \{ref\} from 'vue'/);
  assert.ok(!output.includes("../../lib/"));
});
