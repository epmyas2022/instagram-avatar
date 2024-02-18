import numberAbbr from 'number-abbreviate';

const numberFormatter = new numberAbbr(['K', 'M', 'B', 'T']);

export const formatNumber = (number) => {
    return numberFormatter.abbreviate(number, 1);
};
