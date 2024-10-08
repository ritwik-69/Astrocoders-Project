import {
  ApplicationVerifier,
  Auth,
  createUserWithEmailAndPassword,
  getAuth,
  getMultiFactorResolver,
  GithubAuthProvider,
  GoogleAuthProvider,
  multiFactor,
  MultiFactorError,
  MultiFactorResolver,
  PhoneAuthProvider,
  PhoneMultiFactorGenerator,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { app } from "./firebaseConfig";

export const auth: Auth = getAuth(app);

export async function signInWithGoogle(): Promise<any> {
  try {
    await signInWithPopup(auth, new GoogleAuthProvider());
    return true;
  } catch (e) {
    return e;
  }
}
export async function signInWithGithub(): Promise<any> {
  try {
    const provider = new GithubAuthProvider();

    provider.addScope("repo");
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
    return true;
  } catch (e) {
    console.log(e);
    return e;
  }
}

export async function signUp(
  email: string,
  password: string,
): Promise<boolean> {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function login(email: string, password: string): Promise<any> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (e) {
    return e;
  }
}

export async function logout(): Promise<boolean> {
  try {
    await signOut(auth);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export function verifyIfUserIsEnrolled(user: User) {
  const enrolledFactors = multiFactor(user).enrolledFactors;
  return enrolledFactors.length > 0;
}

export async function verifyPhoneNumber(
  user: User,
  phoneNumber: string,
  recaptchaVerifier: ApplicationVerifier,
): Promise<false | string> {
  const session = await multiFactor(user).getSession();
  const phoneInfoOptions = {
    phoneNumber,
    session,
  };

  const phoneAuthProvider = new PhoneAuthProvider(auth);
  try {
    return await phoneAuthProvider.verifyPhoneNumber(
      phoneInfoOptions,
      recaptchaVerifier,
    );
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function enrollUser(
  user: User,
  verificationCodeId: string,
  verificationCode: string,
) {
  const phoneAuthCredential = PhoneAuthProvider.credential(
    verificationCodeId,
    verificationCode,
  );
  const multiFactorAssertion =
    PhoneMultiFactorGenerator.assertion(phoneAuthCredential);

  try {
    await multiFactor(user).enroll(
      multiFactorAssertion,
      "Personal Phone Number",
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function verifyUserMFA(
  error: MultiFactorError,
  recaptchaVerifier: ApplicationVerifier,
  selectedIndex: number,
): Promise<
  false | { verificationId: string; resolver: MultiFactorResolver } | void
> {
  const resolver = getMultiFactorResolver(auth, error);

  if (
    resolver.hints[selectedIndex].factorId ===
    PhoneMultiFactorGenerator.FACTOR_ID
  ) {
    const phoneInfoOptions = {
      multiFactorHint: resolver.hints[selectedIndex],
      session: resolver.session,
    };

    const phoneAuthProvider = new PhoneAuthProvider(auth);
    try {
      const verificationId = await phoneAuthProvider.verifyPhoneNumber(
        phoneInfoOptions,
        recaptchaVerifier,
      );
      return { verificationId, resolver };
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export async function verifyUserEnrolled(
  verificationMFA: { verificationId: string; resolver: MultiFactorResolver },
  verificationCode: string,
) {
  const { verificationId, resolver } = verificationMFA;
  const credentials = PhoneAuthProvider.credential(
    verificationId,
    verificationCode,
  );
  const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(credentials);

  try {
    await resolver.resolveSignIn(multiFactorAssertion);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

export async function verifyUserEmail(user: User): Promise<boolean> {
  try {
    await sendEmailVerification(user);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}
export async function resetPassword(email: string): Promise<boolean> {
  try {
    await sendPasswordResetEmail(auth, email);
    return true; // Return true if email is sent successfully
  } catch (e) {
    console.log(e); // Log error for debugging
    return false; // Return false if an error occurs
  }
}
