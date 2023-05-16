export interface OpenBehavior {
  index: number;
  behavior: string;
}

export interface OpenBehaviorExtend extends OpenBehavior {
  openBehavior: OpenBehavior,
  setOpenBehavior: React.Dispatch<React.SetStateAction<OpenBehavior>>
}

export type DropdownType = {
  dropdownGame: boolean;
  dropdownHelp: boolean;
  dropdownOpen: () => void;
}

export type ExtractedDropdownGame = Pick<DropdownType, "dropdownGame" | "dropdownOpen">;

export type ExtractedDropdownHelp = Pick<DropdownType, "dropdownHelp" | "dropdownOpen">;