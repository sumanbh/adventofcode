import * as fs from "fs";
import * as path from "path";
import * as url from "url";

console.time("runtime");

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const lines = fs
  .readFileSync(path.resolve(__dirname, "./input.txt"), "utf8")
  .split("\n");

function part1() {
  let largerMeasurement = 0;
  for (let i = 1; i < lines.length; i += 1) {
    if (Number(lines[i]) > Number(lines[i - 1])) {
      largerMeasurement += 1;
    }
  }
  return largerMeasurement;
}

function part2() {
  let largerMeasurement = 0;
  const windows = [];
  for (let i = 0; i < lines.length - 2; i += 1) {
    windows.push(lines.slice(i, i + 3));
  }
  for (let i = 1; i < windows.length; i += 1) {
    const prev = windows[i - 1].reduce((acc, curr) => acc + Number(curr), 0);
    const next = windows[i].reduce((acc, curr) => acc + Number(curr), 0);
    if (next > prev) {
      largerMeasurement += 1;
    }
  }
  return largerMeasurement;
}

console.log("part1:", part1());
console.log("part2:", part2());
console.timeEnd("runtime");
