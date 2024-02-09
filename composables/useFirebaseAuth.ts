import { createUserWithEmailAndPassword } from "firebase/auth";

export const useFirebaseAuth = () => {
  const { $auth } = useNuxtApp();
  const register = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        $auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    register,
  };
};
