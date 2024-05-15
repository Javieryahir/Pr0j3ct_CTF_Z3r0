import { FC } from "react";


interface ReactCommentProps {
    text: string;
}

const ReactComment: FC<ReactCommentProps> = ({ text }) => {
    return <div dangerouslySetInnerHTML={{ __html: `<!-- ${text} -->` }} />;
};

export default ReactComment;