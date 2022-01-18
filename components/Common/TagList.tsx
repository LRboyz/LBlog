import { Space, Tag } from "@arco-design/web-react";
import {
  IconFacebook,
  IconGithub,
  IconGitlab,
  IconTwitter,
} from "@arco-design/web-react/icon";

export default function TagList() {
  return (
    <div className="flex bg-white dark:bg-gray-800 flex-wrap rounded-lg fduration-300 lex-start p-3 mt-5">
        <Tag className="mr-2 mb-2" color="gray" icon={<IconGithub />}>
          Github(2)
        </Tag>
        <Tag className="mr-2 mb-2" color="orangered" icon={<IconGitlab />}>
          Gitlab(12)
        </Tag>
        <Tag className="mr-2 mb-2" color="blue" icon={<IconTwitter />}>
          Twitter(1)
        </Tag>
        <Tag className="mr-2 mb-2" color="arcoblue" icon={<IconFacebook />}>
          Facebook(6)
        </Tag>
      
    </div>
  );
}
