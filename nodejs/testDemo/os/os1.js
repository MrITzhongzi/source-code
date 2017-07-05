const os = require('os');

console.log('系统的默认临时文件夹' + os.tmpdir());

console.log('操作系统的字节数' + os.endianness());

console.log('操作系统运行的毫秒数' + os.uptime());

console.log('操作系统的总内存' + os.totalmem());