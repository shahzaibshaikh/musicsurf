function formatList(list: string[]): string {
  const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction'
  });
  return formatter.format(list);
}

export default formatList;
