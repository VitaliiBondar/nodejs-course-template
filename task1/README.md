clone repository
in the terminal run "npm i"
Then you can run app in the terminal in this directory "node my_caesar_cli" with options:
-s, --shift: a shift value (required)

-a, --action: an action encode/decode (required)

-i, --input: an input file (optional)

-o, --output: an output file (optional)

Usage example:

$ node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
$ node my_caesar_cli --action encode --shift 7
