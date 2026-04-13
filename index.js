#!/usr/bin/env node

/**
 * Helium MCP Server — Real-time news, markets & AI.
 *
 * Thin wrapper connecting to the remote Helium MCP server via mcp-remote.
 * Enables installation via npx/npm for any MCP client.
 *
 * Usage:
 *   npx helium-mcp
 *
 * Or add to your MCP client config:
 *   { "command": "npx", "args": ["-y", "helium-mcp"] }
 *
 * Learn more: https://heliumtrades.com/mcp-page/
 */

const { spawn } = require("child_process");
const path = require("path");

const HELIUM_URL = "https://heliumtrades.com/mcp";

const mcpRemoteBin = path.join(
  __dirname,
  "node_modules",
  ".bin",
  "mcp-remote"
);

const child = spawn(mcpRemoteBin, [HELIUM_URL], {
  stdio: "inherit",
  env: process.env,
});

child.on("error", (err) => {
  if (err.code === "ENOENT") {
    console.error(
      "mcp-remote not found. Install dependencies: npm install"
    );
    process.exit(1);
  }
  console.error("Failed to start Helium MCP:", err.message);
  process.exit(1);
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});

process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
