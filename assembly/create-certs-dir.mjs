import * as fs from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const targetDir = join(currentDir, "secure");

await fs.mkdir(targetDir, { recursive: true });
await fs.writeFile(join(targetDir, "docs-assembly.pem"), process.env.TEMPORAL_CLIENT_CERT);
await fs.writeFile(join(targetDir, "docs-assembly.key"), process.env.TEMPORAL_CLIENT_KEY);
await fs.writeFile(
  join(targetDir, "cloud-connection.json"),
  JSON.stringify(
    {
      "address": "docs-assembly.a2dd6.tmprl.cloud:7233",
      "namespace": "docs-assembly.a2dd6",
      "unique_id": "GitHub-Actions-Assembly-Test",
    },
    null,
    2
  )
);
