interface leftPadProps {
  value: string;
  totalWidth: number;
  paddingChar: string;
}

export const getInitialLetters = (value: string): string => {
  let result = '';
  if (!value) return result;
  const splitted = value.split(' ');
  splitted.length > 1
    ? (result = result
        .concat(splitted[0].substr(0, 1))
        .concat(splitted[splitted.length - 1].substr(0, 1)))
    : (result = splitted[0].substr(0, 1));
  return result.toUpperCase();
};

export const leftPad = ({
  value,
  totalWidth,
  paddingChar,
}: leftPadProps): string => {
  if (!value) return '';
  const length = totalWidth - value.toString().length + 1;
  return Array(length).join(paddingChar || '0') + value;
};
