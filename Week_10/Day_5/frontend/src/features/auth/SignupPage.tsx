import { useRegisterMutation } from "./authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";

export default function SignupPage() {
  const [registerUser, { isLoading, error }] = useRegisterMutation();
  const dispatch = useDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const username = String(form.get("username"));
    const email = String(form.get("email"));
    const password = String(form.get("password"));
    const res = await registerUser({ username, email, password }).unwrap();
    dispatch(setCredentials(res)); // auto‑login
  };

  return (
    <form className="max-w-sm mx-auto p-4" onSubmit={onSubmit}>
      <h1 className="text-2xl font-bold mb-4">Create account</h1>
      <input className="input input-bordered w-full mb-2" name="username" placeholder="Username" />
      <input className="input input-bordered w-full mb-2" name="email" type="email" placeholder="Email" />
      <input className="input input-bordered w-full mb-4" name="password" type="password" placeholder="Password" />
      <button className="btn btn-secondary w-full" disabled={isLoading}>Sign Up</button>
      {error && <p className="text-error mt-2">Failed to register</p>}
    </form>
  );
}