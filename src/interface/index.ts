export interface Movie {
  imdbID: string;
  title: string;
  Type: string;
  year: string;
  posterID: { posterURL: string };
}
export interface ButtonProps {
  buttonLabel: string;
  isActive: boolean;
  onClick: () => void;
}
export interface ButtonGroupProps {
  activeButton: string | undefined;
  handleButtonClick: (button: string, data?: []) => void;
}

export interface FilterComponentProps {
  filterTitle: string;
  filterType: string;
  setFilterTitle: (value: string) => void;
  setFilterType: (value: string) => void;
}

export interface MovieListProps {
  data: Movie[] | null;
  loading: boolean;
  activeButton?: string;
}
