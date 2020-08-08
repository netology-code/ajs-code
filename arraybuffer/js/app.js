{
  // length = 0
  const empty = new Uint8Array();
  // length = 8
  const sized = new Uint8Array(8);
  // создание из массиво-подобного объекта*
  const fromArrayLike = new Uint8Array([1, 2, 3]);
  // так же можно создавать из другого типизированного массива и ArrayBuffer (об этом позже)
}

{
  const buffer = new ArrayBuffer(4);
  const buffer8BitView = new Int8Array(buffer);
  const buffer16BitView = new Int16Array(buffer);

  console.log(buffer8BitView);
  console.log(buffer16BitView);

  buffer16BitView[0] = 1000;
  console.log(buffer16BitView[0] + 1);

  console.log(buffer8BitView);
  console.log(buffer16BitView);
}

{
  const buffer = new ArrayBuffer(2);
  const notClampedBufferView = new Uint8Array(buffer);
  const clampedBufferView = new Uint8ClampedArray(buffer);

  console.log('Step 1');
  notClampedBufferView[0] = 100;
  clampedBufferView[1] = 100;
  console.log(notClampedBufferView[0]);
  console.log(clampedBufferView[1]);
  console.log('-----');

  console.log('Step 2');
  notClampedBufferView[0] += 100;
  clampedBufferView[1] += 100;
  console.log(notClampedBufferView[0]);
  console.log(clampedBufferView[1]);
  console.log('-----');

  console.log('Step 3');
  notClampedBufferView[0] += 100;
  clampedBufferView[1] += 100;
  console.log(notClampedBufferView[0]);
  console.log(clampedBufferView[1]);
  console.log('-----');
}

{
  const helloStr = 'Hello, world!';

  const buffer = new ArrayBuffer(helloStr.length);
  const bufferView = new Uint8Array(buffer);


  for (let i = 0; i < bufferView.length; i += 1) {
    bufferView[i] = helloStr.charCodeAt(i);
  }

  for (let i = 0; i < bufferView.length; i += 1) {
    console.log(String.fromCharCode(bufferView[i]));
  }
}

{
  const buffer = new ArrayBuffer(2);

  // little-endian - флаг true
  new DataView(buffer).setInt16(0, 256, true);
  console.log(new Int16Array(buffer)[0] === 256); // true

  // big-endian - флаг little-endian не выставлен
  new DataView(buffer).setInt16(0, 256);
  console.log(new Int16Array(buffer)[0] === 1); // true
}
