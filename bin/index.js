#!/usr/bin/env node
import { program } from 'commander';
import { init, server } from '../src/index.js';

program
  .name('Vue-SSR-setup')
  .description('Vue SSR tool')
  .version('1.0.0');


program
  .command('init')
  .description('Vue-SSR——setup cli initialization')
  .action(() => {
    init();
  });

program
  .command('serve')
  .description('start ssr server')
  .argument('<string>', 'string to mode')
  .option('--mode', 'Operating environment')
  .action((str, options) => {
    console.log(options.mode)
    // server(options);
  });

program.parse();