'use strict';

/**
 * Import figures.sketch into tutorial
 * @type {FiguresImporter|exports}
 */

let FiguresImporter = require('../figuresImporter');

let fs = require('fs');
let path = require('path');
let log = require('engine/log')();

module.exports = async function() {

  let args = require('yargs')
    .usage("Path to tutorial root is required.")
    .demand(['root'])
    .argv;

  let root = fs.realpathSync(args.root);

  let importer = new FiguresImporter({
    root:            root,
    figuresFilePath: path.join(root, 'figures.sketch')
  });

  await importer.syncFigures();

  log.info("Figures imported");
};


