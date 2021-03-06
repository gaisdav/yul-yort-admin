import { FC, lazy, Suspense } from "react";
import { observer } from "mobx-react-lite";
import { useRoute } from "react-router5";

import { LoadingScreen } from "./components/common/LoadingScreen";
import { useNotification } from "./hooks/useNotification";
import { Notify } from "./components/common/Notify";

const UnauthorizedApp = lazy(() => import("./UnauthorizedApp"));
const AuthorizedApp = lazy(() => import("./AuthorizedApp"));

export const App: FC = observer(() => {
  const { notification, removeNotification } = useNotification();

  const {
    route: { name },
  } = useRoute();

  const isUnauthorized = name === "login";

  return (
    <>
      <Notify
        open={!!notification}
        type={notification?.type || "error"}
        message={notification?.message || ""}
        onClose={removeNotification}
      />

      <Suspense fallback={<LoadingScreen />}>
        {isUnauthorized ? <UnauthorizedApp /> : <AuthorizedApp />}
      </Suspense>
    </>
  );
});

export default App;
