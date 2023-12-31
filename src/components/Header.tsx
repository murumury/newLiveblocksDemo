import { useOthersConnectionIds } from "../liveblocks.config";
import Avatar from "./Avatar";
import { COLORS_PRESENCE } from "../constants";
import styles from "./Header.module.css";

export default function Header() {
  const connectionIds = useOthersConnectionIds();

  return (
    <header className={styles.container}       style={{
    backgroundImage: "url(/bg.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",}}>
      <div className={styles.container_avatars}>
        {connectionIds.map((connectionId) => (
          <Avatar
            key={connectionId}
            color={COLORS_PRESENCE[connectionId % COLORS_PRESENCE.length]}
          />
        ))}
      </div>
    </header>
  );
}
