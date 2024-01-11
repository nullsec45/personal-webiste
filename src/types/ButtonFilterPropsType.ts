import { Dispatch, SetStateAction } from 'react';

export type ButtonFilterPropsType = {
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  handleFilterChange: (newFilter: string) => void;
};
