### Hexlet tests and linter status:
[![Actions Status](https://github.com/Vit90Fomin/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Vit90Fomin/frontend-project-46/actions)
[![.github/workflows/gendiff-check.yml](https://github.com/Vit90Fomin/frontend-project-46/actions/workflows/gendiff-check.yml/badge.svg)](https://github.com/Vit90Fomin/frontend-project-46/actions/workflows/gendiff-check.yml)
<a href="https://codeclimate.com/github/Vit90Fomin/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/33a5babb9dd7fafd0226/maintainability" /></a>
<a href="https://codeclimate.com/github/Vit90Fomin/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/33a5babb9dd7fafd0226/test_coverage" /></a>

# **Hello, Dear Users**

## **Project Description**

Gendiff - is a utility that determines the difference between two data structures.

The program can work both from the command line and be installed as a library in a third-party project.

Utility can work with json and yaml/yml files.

**Installation and launch instructions:**

1. Install
 ```
  make install
 ```
2. The description of the utility is displayed by the command:
 ```
  gendiff -h
 ```
3. Run app with command:
 ```
  gendiff [format name] <path to file1> <path to file2>
 ```
$~~$Paths can be either absolute or relative.

Formats are specified with the -f flags. Supported format names:

* stylish - used by default

* plain - for line-by-line output of the difference

* json - for json difference output


<br/>   
Video with work process "gendiff with json".
<a href="https://asciinema.org/a/Om3LpEDKZcO0Mkmam3B9F6u8c" target="_blank"><img src="https://asciinema.org/a/Om3LpEDKZcO0Mkmam3B9F6u8c.svg" /></a>

<br/>   
Video with work process "gendiff with yml".
<a href="https://asciinema.org/a/CNRC8k1kC0Dcj7TKETkfYfTWv" target="_blank"><img src="https://asciinema.org/a/CNRC8k1kC0Dcj7TKETkfYfTWv.svg" /></a>

<br/>   
Video with work process "gendiff with nested structure".
<a href="https://asciinema.org/a/eW1KOr41niVqtWl9iIbsHoSDi" target="_blank"><img src="https://asciinema.org/a/eW1KOr41niVqtWl9iIbsHoSDi.svg" /></a>

<br/>   
Video with work process "gendiff json format".
<a href="https://asciinema.org/a/ILrzMwY6IEXspSKG78Szs2Eiy" target="_blank"><img src="https://asciinema.org/a/ILrzMwY6IEXspSKG78Szs2Eiy.svg" /></a>

<br/>   
Video with work process "gendiff plain format".
<a href="https://asciinema.org/a/JrtE0b9CJnWMm44edkUWUaED1" target="_blank"><img src="https://asciinema.org/a/JrtE0b9CJnWMm44edkUWUaED1.svg" /></a>