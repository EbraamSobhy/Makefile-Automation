# Makefile Cheat Sheet

## Basic Structure

```Makefile
target: dependencies
    command
```
- Commands must start with a TAB, not spaces.
- make runs the first target by default.

## Common Targets

```Makefile
all: build test

build:
	gcc main.c -o app

test:
	./run_tests.sh

clean:
	rm -f app
```

## Usage

```Makefile
make
make build
make clean
```

## Variables

```Makefile
CC = gcc
CFLAGS = -Wall -O2

build:
	$(CC) $(CFLAGS) main.c -o app

${CC}
```

## Automatic Variables

| Variable |       Meaning        |
| -------- | -------------------- |
| `$@`     | Target name          |
| `$<`     | First dependency     |
| `$^`     | All dependencies     |
| `$?`     | Changed dependencies |


