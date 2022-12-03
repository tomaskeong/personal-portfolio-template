const path = require('path');

module.exports = {
  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': (filenames) => [
    `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' --file ')}`,
    `yarn prettier --write ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' --file ')}`,
  ],

  // Prettify only Markdown and JSON files
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' --file ')}`,
};
