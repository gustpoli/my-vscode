import { FileContent } from "@/components/VSCode/layout/File";
import fs from 'fs';
import path from 'path';

export default function Setup() {

  const filePath = path.join(process.cwd(), 'src', 'data', 'README.md');
  const mdString = fs.readFileSync(filePath, 'utf-8');

  return (
    <FileContent type="md" md={mdString} />
  );
}
