export interface FileStructure {
  [key: string]: {
    files?: string[];
    children?:  FileStructure;
  };
}