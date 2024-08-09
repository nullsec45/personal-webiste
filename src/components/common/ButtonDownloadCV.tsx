import { FaDownload } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function ButtonDownloadCV() {
  return (
    <Link
      to="https://drive.google.com/drive/folders/11kkkTHQAqII8LKjbopsn6QzbxAsMk3op?usp=sharing"
      target="_blank"
      className="flex gap-2 items-start gorup"
    >
      <FaDownload size={19} />
      <h1 className="text-base font-medium">Download CV</h1>
    </Link>
  );
}
