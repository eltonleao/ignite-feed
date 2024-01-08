import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={`${styles.post}`}>
      <header>
        <div className={`${styles.author}`}>
          <Avatar src="https://picsum.photos/200" />
          <div className={`${styles.authorInfo}`}>
            <strong>Lorem Ipsum</strong>
            <span>App Developer</span>
          </div>
        </div>

        <time
          title="01 de janeiro de 2024 às 08:00:00"
          dateTime="2024-01-01 08:00:00"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={`${styles.content}`}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          nulla!
        </p>
        <p>
          <a href="#">mail@mail.com</a>
        </p>
        <p>
          <a href="#">#lorem</a> <a href="#">#lorem</a> <a href="#">#lorem</a>{" "}
        </p>
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
