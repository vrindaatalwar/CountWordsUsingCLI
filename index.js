const fs = require('fs');
const { program } = require('commander');
program
  .name('count_words')
  .description('CLI to do file based task')
  .version('0.8.0');

program.command('count')
    .description('gives you the number of words in a line')
    .argument('<file>')
    .action(function(file){
        fs.readFile(file, "utf-8", function(err, data){
            if(err){
                console.log(err.message);
                return;
            }
            else{
                const words = data.split(" ").length;
                console.log("There are "+ words + " words in this file");
            }
        })
    })
program.parse(process.argv);