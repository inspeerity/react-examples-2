import faker from 'faker';

const adaptForSelect = (item) => item.map((i) => ({label: i, value: i}));

const fake = (from, what) => {
    return adaptForSelect([...new Set(
        [...Array(10).keys()].map(() => faker[from][what]())
    )]);
};

export const cities = fake('address', 'city');
export const countries = fake('address', 'country');
export const currencies = fake('finance', 'currencyName');
export const states = fake('address', 'state');
export const statuses =  adaptForSelect(['new', 'canceled', 'complete', 'other status1', 'other status2']);
export const words = fake('lorem', 'words');
export const genFakeData = (word) => adaptForSelect([...Array(10).keys()].map((i) => `${word}_${i}`));
