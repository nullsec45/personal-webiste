import { FaDownload } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export default function ButtonDownloadCV() {
  return (
    <Link
      to="https://drive.google.com/file/d/1i74CU89UWWOeSxOGISOj6kyEQDyT9GBR/view?usp=sharing"
      target="_blank"
      className="flex gap-2 items-start gorup"
    >
      <FaDownload size={19} />
      <h1 className="text-base font-medium">Download CV</h1>
    </Link>
  );
}
