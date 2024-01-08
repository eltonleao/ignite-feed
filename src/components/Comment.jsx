import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={`${styles.comment}`}>
      <img src="https://picsum.photos/200" alt="" />

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
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
            nulla?
          </p>
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
