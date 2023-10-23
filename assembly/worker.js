#!/usr/bin/env node
import { Worker, NativeConnection } from "@temporalio/worker";
import * as activities from "./activities/index.js";
import fs from "fs-extra";
import path from "path";

async function run() {
  const args = process.argv.slice(2);
  switch (args[0]) {
    case "--cloud":
      await useCloud();
      break;
    default:
      await useLocal();
  }

  const __dirname = path.dirname(new URL(import.meta.url).pathname);

  async function useCloud() {
    const certPath = path.join(__dirname, "secure/docs-assembly.pem");
    const keyPath = path.join(__dirname, "secure/docs-assembly.key");
    const cert = await fs.readFile(certPath);
    const key = await fs.readFile(keyPath);  
    const connection = await NativeConnection.connect({
      address: "docs-assembly.a2dd6.tmprl.cloud",
      tls: {
        clientCertPair: {
          crt: cert,
          key: key,
        },
      },
    });

    const data = await fs.readJSON("./secure/cloud-connection.json");
    const worker = await Worker.create({
      connection,
      namespace: "docs-assembly.a2dd6",
      workflowsPath: path.resolve("./workflows/fullAssembly.js"),
      activities,
      taskQueue: `docs-assembly-${data.unique_id}`,
    });
    await worker.run();
  }

  async function useLocal() {
    const worker = await Worker.create({
      workflowsPath: path.resolve("./workflows/fullAssembly.js"),
      activities,
      taskQueue: `docs-assembly`,
    });
    await worker.run();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
