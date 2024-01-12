import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { ptBR } from "date-fns/locale";
import { format, formatDistanceToNow } from "date-fns";


interface Author {
  name: string;
  role: string;
  avatarURL: string;
}

interface Content{
  type: "paragraph" | "link",
  content: string
}

export interface PostType{
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}


interface PostProps{
  post: PostType
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState<string[]>([]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedAtString = format(post.publishedAt, "dd MMM yyyy 'às' HH:mm:ss");
  const publishedAtRelativeString = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function deleteComment(comment: string) {
    const commentsWithoutDeleted = comments.filter((c) => c !== comment);
    setComments(commentsWithoutDeleted);
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity(
      "Oops, você esqueceu de escrever o comentário!"
    );
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={`${styles.post}`}>
      <header>
        <div className={`${styles.author}`}>
          <Avatar src={post.author.avatarURL} alt="" />
          <div className={`${styles.authorInfo}`}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedAtString} dateTime={publishedAtString}>
          {publishedAtRelativeString}
        </time>
      </header>

      <div className={`${styles.content}`}>
        {post.content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          }

          if (line.type === "link") {
            return (
              <a key={line.content} target="_blank" href={line.content}>
                {line.content}
              </a>
            );
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        className={`${styles.commentForm}`}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          required
          onInvalid={handleNewCommentInvalid}
          onChange={handleNewCommentChange}
          value={newCommentText}
          name="comment"
          placeholder="Deixe um comentário"
        />
        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={`${styles.commentList}`}>
        {comments.map((comment) => {
          return <Comment content={comment} onDeleteComment={deleteComment} />;
        })}
      </div>
    </article>
  );
}
