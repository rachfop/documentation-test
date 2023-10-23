import * as fs from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = dirname(fileURLToPath(import.meta.url));
const targetDir = join(currentDir, "secure");

await fs.mkdir(targetDir, { recursive: true });
await fs.writeFile(join(targetDir, "docs-assembly.pem"), process.env.TEMPORAL_CLIENT_CERT);
await fs.writeFile(join(targetDir, "docs-assembly.key"), process.env.TEMPORAL_CLIENT_KEY);
