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
  let depth = 0;
  let horizontal = 0;
  for (let i = 0; i < lines.length; i += 1) {
    const [command, value] = lines[i].split(" ");
    switch (command) {
      case "forward": {
        horizontal += parseInt(value, 10);
        break;
      }
      case "up": {
        depth -= parseInt(value, 10);
        break;
      }
      case "down": {
        depth += parseInt(value, 10);
        break;
      }
      default:
        throw new Error(`Unknown command ${command}`);
    }
  }
  return depth * horizontal;
}

function part2() {
  let depth = 0;
  let horizontal = 0;
  let aim = 0;
  for (let i = 0; i < lines.length; i += 1) {
    const [command, value] = lines[i].split(" ");
    switch (command) {
      case "forward": {
        horizontal += parseInt(value, 10);
        depth += aim * parseInt(value, 10);
        break;
      }
      case "up": {
        aim -= parseInt(value, 10);
        break;
      }
      case "down": {
        aim += parseInt(value, 10);
        break;
      }
      default:
        throw new Error(`Unknown command ${command}`);
    }
  }
  return depth * horizontal;
}

console.log("part1:", part1());
console.log("part2:", part2());
console.timeEnd("runtime");
