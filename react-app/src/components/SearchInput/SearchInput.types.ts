export interface SearchInputProps {
  img?: string;
  placeholder?: string; 
  value: string; 
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void; 
  onButtonClick?: () => void; 
}
