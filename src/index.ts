function greet(name: string | null | undefined) {
    if (name)
    console.log(name.toLocaleUpperCase())
    else
    console.log('HELLO');
}

greet(null);