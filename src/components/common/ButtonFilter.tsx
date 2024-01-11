import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ButtonFilterPropsType } from '@/types/ButtonFilterPropsType';
import { Filters } from '@/components/common/constant/Filters';

export default function ButtonFilter(props: ButtonFilterPropsType) {
  const { filter, setFilter, handleFilterChange } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'outline'}>
          {filter || 'All'}
          <ChevronsUpDown className="ms-2" size={15} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
          {Filters?.map((item, index) => (
            <DropdownMenuRadioItem
              key={index}
              value={item.value}
              onClick={() => handleFilterChange(item.value)}
            >
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
