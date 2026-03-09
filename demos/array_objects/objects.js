let laptop = {
  cpu: 'i9',
  ram: 32,
  cores: 4,
  diskSize: 0.5,
  diskType: 'SSD',
  make: 'Dell'
}

// Also illustrates line continuation with \. Note: using \ within a string will break the string as shown
console.log(`My ${laptop.make} laptop is powered by an ${laptop.cpu} processor with \
${laptop.cores} cores. It has ${laptop.ram} GB 
RAM and ${laptop.diskSize} TB ${laptop.diskType} storage.`);

laptop.ram=64;
laptop.diskSize=1;

console.log(`My upgraded ${laptop.make} laptop is powered by an ${laptop.cpu} processor with \
${laptop.cores} cores. It has ${laptop.ram} GB RAM and \
${laptop.diskSize} TB ${laptop.diskType} storage.`);
