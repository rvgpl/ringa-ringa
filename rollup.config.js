import babel from "rollup-plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import filesize from "rollup-plugin-filesize";
import autoprefixer from "autoprefixer";
import precss from "precss";
import localResolve from "rollup-plugin-local-resolve";

import pkg from "./package.json";

const globalsList = {
  classnames: "classnames",
  react: "React",
};

const config = {
  input: "index.js",
  output: [
    {
      file: pkg.browser,
      format: "umd",
      name: "ringa-ringa",
      globals: globalsList,
    },
    {
      file: pkg.main,
      format: "cjs",
      name: "ringa-ringa",
      globals: globalsList,
    },
    {
      file: pkg.module,
      format: "es",
      globals: globalsList,
    },
  ],
  external: ["react", "classnames"],
  plugins: [
    peerDepsExternal(),
    postcss({
      extract: true,
      plugins: [precss(), autoprefixer({ browsers: ["last 2 versions"] })],
    }),
    babel({ exclude: "node_modules/**" }),
    localResolve(),
    resolve(),
    commonjs(),
    filesize(),
  ],
};

export default config;
