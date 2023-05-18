import formatBytes from 'utils/formatBytes';

describe('formatBytes', () => {
  test('should convert the image size to 108.75 KB', () => {
    const size = 111355;
    const formatedSize = formatBytes(size);
    expect(formatedSize).toEqual('108.75 KB');
  });

  test('should convert the image size to 1.32 MB', () => {
    const size = 1384767;
    const formatedSize = formatBytes(size);
    expect(formatedSize).toEqual('1.32 MB');
  });
});
