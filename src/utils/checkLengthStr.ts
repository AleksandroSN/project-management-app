export const checkLenghtStr = (searchTerm: string, searchArea: string): boolean => {
  const idxSearchTerm = searchArea.indexOf(searchTerm);
  const resultStr = searchArea.slice(idxSearchTerm);
  return resultStr.length === searchTerm.length;
};
