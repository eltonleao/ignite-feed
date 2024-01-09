import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { ptBR } from "date-fns/locale";
import { format, formatDistanceToNow } from "date-fns";

export function Post({ author, publishedAt, content }) {
  const publishedAtString = format(publishedAt, "dd MMM yyyy 'às' HH:mm:ss");
  const publishedAtRelativeString = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
  return (
    <article className={`${styles.post}`}>
      <header>
        <div className={`${styles.author}`}>
          <Avatar src={author.avatarURL} />
          <div className={`${styles.authorInfo}`}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedAtString} dateTime={publishedAtString}>
          {publishedAtRelativeString}
        </time>
      </header>

      <div className={`${styles.content}`}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          }

          if (line.type === "link") {
            return (
              <a target="_blank" href={line.content}>
                {line.content}
              </a>
            );
          }
        })}
      </div>

      <form className={`${styles.commentForm}`}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={`${styles.commentList}`}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
