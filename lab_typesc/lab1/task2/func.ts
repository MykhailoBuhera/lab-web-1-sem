function greet(name: string, times: number = 1): void {
  for (let i = 0; i < times; i++) {
    console.log(`200, ${name}`);
  }
}

greet("Ryzyu");       
greet("Todik", 3);   