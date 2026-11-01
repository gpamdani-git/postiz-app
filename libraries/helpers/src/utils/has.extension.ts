export const hasExtension = (
  path: string | undefined | null,
  extension: string | string[]
): boolean => {
  if (!path) {
    return false;
  }
  const extensions = Array.isArray(extension)
    ? extension
    : extension.toLowerCase() === 'mp4'
    ? ['mp4', 'mov']
    : [extension];

  return extensions.some((extItem) => {
    const ext = extItem.startsWith('.') ? extItem : `.${extItem}`;
    return path.toLowerCase().indexOf(ext.toLowerCase()) > -1;
  });
};
