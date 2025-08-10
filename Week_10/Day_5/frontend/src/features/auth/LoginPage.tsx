import { useLoginMutation } from "./authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";

export default function LoginPage() {
  const [login, { isLoading, error }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email"));
    const password = String(form.get("password"));
    const res = await login({ email, password }).unwrap();
    dispatch(setCredentials(res));
  };

  return (
    <form className="max-w-sm mx-auto p-4" onSubmit={onSubmit}>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input className="input input-bordered w-full mb-2" name="email" type="email" placeholder="Email" />
      <input className="input input-bordered w-full mb-4" name="password" type="password" placeholder="Password" />
      <button className="btn btn-primary w-full" disabled={isLoading}>Login</button>
      {error && <p className="text-error mt-2">Failed to login</p>}
    </form>
  );
}