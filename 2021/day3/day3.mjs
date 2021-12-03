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
  let gammaRate = "";
  for (let i = 0; i < lines[0].length; i += 1) {
    const count = { 0: 0, 1: 0 };
    for (let j = 0; j < lines.length; j += 1) {
      const val = lines[j][i];
      count[val] += 1;
    }
    if (count[0] > count[1]) {
      gammaRate += "0";
    } else {
      gammaRate += "1";
    }
  }
  const epsilonRate = gammaRate
    .split("")
    .map((x) => (x === "0" ? "1" : "0"))
    .join("");
  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

function part2(target) {
  const inputs = [...lines];
  let search = "";
  for (let i = 0; i < inputs[0].length; i += 1) {
    const count = { 0: 0, 1: 0 };
    for (let j = 0; j < inputs.length; j += 1) {
      const val = inputs[j][i];
      count[val] += 1;
    }
    if (count[0] > count[1]) {
      search = target === "o2" ? "0" : "1";
    } else {
      search = target === "o2" ? "1" : "0";
    }
    for (let j = 0; j < inputs.length; j += 1) {
      const val = inputs[j][i];
      if (val !== search) {
        inputs.splice(j, 1);
        j -= 1;
      }
    }
    if (inputs.length === 1) {
      break;
    }
  }
  return inputs[0];
}

const o2 = parseInt(part2("o2"), 2);
const co2 = parseInt(part2("co2"), 2);

console.log("part1:", part1());
console.log("part2:", o2 * co2);
console.timeEnd("runtime");
