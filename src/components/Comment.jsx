import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content }) {
  return (
    <div className={`${styles.comment}`}>
      <Avatar hasBorder={false} src="https://picsum.photos/200" />

      <div className={`${styles.commentBox}`}>
        <div className={`${styles.commentContent}`}>
          <header>
            <div className={`${styles.authorAndTime}`}>
              <strong>Lorem Ipsum</strong>
              <time title="01 de  janeiro de 2024">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
