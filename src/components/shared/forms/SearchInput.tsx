import {
  InputAdornment,
  IconButton,
  TextField,
  FormControl,
  TextFieldProps,
  BoxProps,
} from '@mui/material';
import { Box } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect } from 'react';
import useDebounce from '../../../utils/hooks/use-debounce';
export type SearchProps = TextFieldProps & {
  handleSearch: (searchBy: string) => void;
  debounceTime?: number;
  boxProps?: Omit<BoxProps, 'children' | 'component' | 'theme'>;
};

const SEARCH_BY = 'searchBy';

export const SearchInput: React.FC<SearchProps> = ({
  handleSearch,
  placeholder,
  boxProps,
  debounceTime = 1000,
  ...otherProps
}) => {
  const { debouncedValue, setDebouncedValue } =
    useDebounce<string>(debounceTime);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDebouncedValue(event.target.value);
  };

  useEffect(() => {
    handleSearch(debouncedValue ?? '');
  }, [debouncedValue]);

  return (
    <Box {...(boxProps as any)}>
      <FormControl fullWidth>
        <TextField
          placeholder={placeholder}
          name={SEARCH_BY}
          type="text"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton edge="start">
                  <SearchIcon sx={{ color: 'black', opacity: '0.77' }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...otherProps}
        />
      </FormControl>
    </Box>
  );
};
