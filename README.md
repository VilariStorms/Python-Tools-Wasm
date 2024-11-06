# Python-Tools-Wasm

Accessible here via github pages: [Python-Tools-Wasm](https://vilaristorms.github.io/Python-Tools-Wasm)

Currently just contains a simple interface to use [pycdc and pycdas](https://github.com/zrax/pycdc/) entirely client side in the browser. 
I would like to figure out how to get this working without needing to modify the c++ code before compiling to web assembly but I havent done that yet so it's messy and hacky but it does work.

## Features
- .pyc files can be disassembled/decompiled completely in the browser entirely client side, nothing gets sent to a server.
- Additional commandline argument can be passed as usual, as if you were using the program from the command line eg. "--help"

This is very much unfinished, I just wanted it to be accessible on github, mostly for my own convienience. I've also added a link to the excellent [pyinstxtractor web version](https://pyinstxtractor-web.netlify.app/) which similarly, also runs entirely client side in the browser.
<img src="https://vilaristorms.github.io/Python-Tools-Wasm/thumbnail.png">
