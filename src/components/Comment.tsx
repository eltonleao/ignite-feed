import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

import { useState } from "react";


interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={`${styles.comment}`}>
      <Avatar onClick={()=> console.log("me clickou?")} hasBorder={false} src="https://picsum.photos/200" alt=""/>

      <div className={`${styles.commentBox}`}>
        <div className={`${styles.commentContent}`}>
          <header>
            <div className={`${styles.authorAndTime}`}>
              <strong>Lorem Ipsum</strong>
              <time title="01 de  janeiro de 2024">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
