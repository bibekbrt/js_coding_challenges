const defaultConfig = { dark: false, lang: 'eng' };
const userConfig = { dark: true };


const finalConfig = { ...defaultConfig, ...userConfig };
console.log(finalConfig);