  let reader = new FileReader();

  // thanks random guy on stack overflow for this function lmao
  function countWords(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    return s.split(' ').filter(function(str){return str!="";}).length;
    //return s.split(' ').filter(String).length; - this can also be used
  }

  function load_file() {
    let files = document.getElementById('myfile').files;
    let file = files[0];
    reader.addEventListener('loadend', read_file);
    reader.readAsArrayBuffer(file);
  }

  function read_file(e) {
    let result = reader.result;
    const uint8_view = new Uint8Array(result);
    name = document.getElementById('myfile').files[0].name;
    argument = 'program.wasm ' + name;
    cli_args = document.getElementById('cliArgs').value;
    if (cli_args) {
        argument = argument + ' ' + cli_args;
        console.log('Running with arguments: ' + cli_args);
    }

    FS.writeFile(name, uint8_view)
    const sttus = Module.ccall(
        'wrap_main',                  // function name
        'number',                // return type (int)
        ['number', 'string'],   // arg types
        [countWords(argument), argument] // argument values
    );
    console.log(sttus);
  }

